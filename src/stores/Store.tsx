import {createContext} from 'react'
import {
  IadditionalData,
  IContext,
  Iitem,
  IparsedObj,
} from '../interfaces/interfaces'
import {
  responseShape,
  additionalShape,
} from '../interfaces/types'
import {fetchData} from '../api/fetchData'
import {UIStore} from './UIStore'
import _ from 'lodash'
import {makeAutoObservable} from 'mobx'

const getLocal = (key: string, obj: unknown) => {
  const t = localStorage.getItem(key)
  if (!t) return obj
  try {
    return JSON.parse(t)
  } catch (e) {
    return obj
  }
}

const setLocal = (key: string, obj: unknown) => {
  localStorage.setItem(key, JSON.stringify(obj))
}

export class Store {
  users
  organizations
  favorites
  card
  searchQuery
  apiQuery
  filteredBy
  error
  UIStore: UIStore

  constructor(
    users: Iitem[] | [],
    organizations: Iitem[] | [],
    favorites: Iitem[] | [],
    card: Iitem | null,
    searchQuery: string,
    filteredBy: string,
    error: string | null,
    apiQuery: string,
  ) {
    makeAutoObservable(this, {}, {autoBind: true})
    this.users = users
    this.organizations = organizations
    this.favorites = favorites
    this.card = card
    this.searchQuery = searchQuery
    this.apiQuery = apiQuery
    this.filteredBy = filteredBy
    this.error = error
    this.UIStore = new UIStore(
      null,
      true,
      window.innerWidth < 900,
      false,
      true,
      false,
    )
    this.initApp()
  }
  setFilteredBy(filteredBy: string): void {
    this.filteredBy = filteredBy
  }

  setApiQuery(category: string): void {
    let lastId
    switch (category) {
      case 'users':
        lastId = _.last(this.users)?.id || ''
        break
      case 'organizations':
        lastId = _.last(this.organizations)?.id || ''
        break
      default:
        return
    }
    if (lastId) this.apiQuery = `?since=${lastId}`
  }

  get searchFavorites(): Iitem[] {
    let filtered
    switch (this.filteredBy) {
      case 'users':
        filtered = this.favorites.filter(
          (el) => el.type === 'users',
        )
        break
      case 'organizations':
        filtered = this.favorites.filter(
          (el) => el.type === 'organizations',
        )
        break
      default:
        filtered = this.favorites
    }

    return this.searchQuery
      ? filtered.filter(
          (el: Iitem) =>
            el?.login
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            el?.description
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase()),
        )
      : filtered
  }
  setSearchQuery(query: string): void {
    this.searchQuery = query
  }
  setUsers(users: Iitem[] | []): void {
    this.users = users
  }
  setOrganizations(organizations: Iitem[] | []): void {
    this.organizations = organizations
  }

  setCard(card: Iitem | null): void {
    this.card = card
  }

  async updateCard(
    card: Iitem | null,
  ): Promise<IadditionalData | void> {
    if (card === null) {
      this.card = null
      return
    }
    const type =
      card.type === 'users' ? 'users' : 'currentOrg'
    const newCard = card
    const currentEl = await fetchData(
      type,
      `/${card.login}`,
    )

    const shapedResponse = additionalShape.parse(currentEl)

    const additionalData = {
      name: shapedResponse.name,
      blog: shapedResponse.blog,
      location: shapedResponse.location,
      followers: shapedResponse.followers,
      following: shapedResponse.following,
      publicRepos: shapedResponse.public_repos,
      htmlUrl: shapedResponse.html_url,
    }
    newCard.additionalData = await additionalData

    this.setCard(newCard)
  }
  initApp(): void {
    this.favorites = getLocal('favorites', null)
  }
  toggleFavorites(card: Iitem | null): void {
    if (!card) return
    const newCard = {
      ...card,
      inFavorites: !card.inFavorites,
    }
    if (this.favorites === null) {
      this.favorites = [newCard]
    } else {
      this.favorites = this.favorites.some(
        (el: Iitem) => el.login === card?.login,
      )
        ? this.favorites.filter(
            (localEl: Iitem) =>
              localEl.login !== card?.login,
          )
        : [...this.favorites, newCard]
    }

    const changeElFavorites = (el: Iitem) =>
      el.login === card?.login ? newCard : el
    if (card.type === 'users')
      this.users =
        this.users?.map(changeElFavorites) || null
    if (card.type === 'organizations')
      this.organizations =
        this.organizations?.map(changeElFavorites) || null
    this.setCard(newCard)
    setLocal('favorites', this.favorites)
  }

  *updateData(type: string, page: string): Generator {
    if (type === null) return
    this.UIStore.setLoading(true)

    const response = yield fetchData(type, page)

    const shapedResponse = responseShape.parse(response)

    const mappedResponse = shapedResponse.map(
      (el: IparsedObj) => {
        return {
          id: String(el.id),
          login: el.login,
          description: el.description,
          avatarUrl: el['avatar_url'],
          inFavorites: false,
          type: type,
          orgaznizationsUrl:
            el['organizations_url'] || undefined,
          additionalData: null,
        }
      },
    )
    //ищем в ответе совпадения с уже имеющимся списком,
    //и НЕ добавляем, если объект уже присутствовал
    const result = this.favorites
      ? mappedResponse.map((respEl: Iitem) =>
          this.favorites.some(
            (favEl: Iitem) => favEl.login === respEl.login,
          )
            ? {...respEl, inFavorites: true}
            : respEl,
        )
      : mappedResponse
    if (type === 'organizations')
      this.organizations = _.unionBy(
        this.organizations,
        result,
        'id',
      )
    if (type === 'users')
      this.users = _.unionBy(this.users, result, 'id')

    setTimeout(() => this.UIStore.setLoading(false), 500)
  }
}

export const AppContext = createContext({} as IContext)
