import {createContext} from 'react'
import {
  IContext,
  Iitem,
  IparsedObj,
  responseShape,
} from '../interfaces/interfaces'
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
  error
  UIStore: UIStore

  constructor(
    users: Iitem[] | [],
    organizations: Iitem[] | [],
    favorites: Iitem[] | [],
    card: Iitem | null,
    searchQuery: string,
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
    this.error = error
    this.UIStore = new UIStore(
      null,
      true,
      window.innerWidth < 900,
      false,
    )
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
    return this.searchQuery
      ? this.favorites.filter(
          (el: Iitem) =>
            el?.login
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            el?.description
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase()),
        )
      : this.favorites
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
