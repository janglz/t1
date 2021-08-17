import {createContext} from 'react'
import {
  IContext,
  Iitem,
  IparsedObj,
  responseShape,
  responseType,
} from '../interfaces/interfaces'
import {IparsedResponse} from '../interfaces/types'
import {fetchData} from '../api/fetchData'
import {UIStore} from './UIStore'

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
  UIStore: UIStore

  constructor(
    users: Iitem[] | null,
    organizations: Iitem[] | null,
    favorites: Iitem[] | [],
    card: Iitem | null,
    searchQuery: string,
  ) {
    makeAutoObservable(this, {}, {autoBind: true})
    this.users = users
    this.organizations = organizations
    this.favorites = favorites
    this.card = card
    this.searchQuery = searchQuery
    this.UIStore = new UIStore(
      null,
      true,
      window.innerWidth < 900,
      false,
    )
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
  setUsers(users: Iitem[] | null): void {
    this.users = users
  }
  setOrganizations(organizations: Iitem[] | null): void {
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

    this.favorites =
      this.favorites &&
      this.favorites?.some(
        (el: Iitem) => el.login === card?.login,
      )
        ? this.favorites.filter(
            (localEl: Iitem) =>
              localEl.login !== card?.login,
          )
        : [...this.favorites, newCard]

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
    this.UIStore.setLoading(true)
    const response = yield fetchData(type, page)

    const shapedResponse = responseShape.parse(response)

    const mappedResponse = shapedResponse.map(
      (el: IparsedObj) => {
        return {
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
    const result = mappedResponse.map((respEl: Iitem) =>
      this.favorites?.some(
        (favEl: Iitem) => favEl.login === respEl.login,
      )
        ? {...respEl, inFavorites: true}
        : respEl,
    )
    if (type === 'organizations')
      this.organizations = result
    if (type === 'users') this.users = result

    setTimeout(() => this.UIStore.setLoading(false), 2000)
  }
}

export const AppContext = createContext({} as IContext)
