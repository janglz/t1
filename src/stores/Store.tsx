
import { createContext } from 'react';
import { IContext, Iitem } from '../interfaces/interfaces';
import { fetchData } from '../api/fetchData';

import { makeAutoObservable } from "mobx";

const getLocal = (key: string, obj: any) => {
  const t = localStorage.getItem(key)
  if (!t) return obj
  try {
    return JSON.parse(t)
  } catch (e) {
    return obj
  }
}

const setLocal = (key: string, obj: any) => {
  localStorage.setItem(key, JSON.stringify(obj))
}

export class Store {
  users;
  organizations;
  favorites;
  page;
  card;
  showMenu;
  mobile;
  windowSize;
  

  constructor
  (
    users: Iitem[]|null, 
    organizations: Iitem[]|null, 
    favorites: Iitem[]|[], 
    page: string|null, 
    card: Iitem|null, 
    showMenu: boolean,
    mobile: boolean, 
  ) {
    makeAutoObservable(this, {}, { autoBind: true })
    this.users = users;
    this.organizations = organizations;
    this.favorites = favorites;
    this.page = page;
    this.card = card;
    this.showMenu = showMenu;
    this.mobile = mobile;
    this.windowSize = window.innerWidth
  }

  setMobile (bool: boolean): void {
    this.mobile = bool
  }
  setShowMenu (bool: boolean): void {
    this.showMenu = bool
  }
  setUsers (users: Iitem[] | null): void {
    this.users = users
  }
  setOrganizations (organizations: Iitem[] | null): void {
    this.organizations = organizations
  }
  setPage (page: string | null): void {
    this.page = page || ''
  }
  setCard (card: Iitem | null): void {
    this.card = card
  }
  initApp (): void {
    this.favorites = getLocal('favorites', null); 
  }

  toggleFavorites (card: Iitem | null): void {
    if (!card) return
    const newCard = {...card, inFavorites: !card.inFavorites}

    this.favorites = this.favorites && this.favorites?.some((el: Iitem) => el.login === card?.login) ?
      this.favorites.filter((localEl: Iitem) => localEl.login !== card?.login) :
      [...this.favorites, newCard] 

    const changeElFavorites = (el: Iitem) => el.login === card?.login ? 
      newCard : el;
    if (card.type === 'users') this.users = this.users?.map(changeElFavorites) || null
    if (card.type === 'organizations') this.organizations = this.organizations?.map(changeElFavorites) || null
    this.setCard(newCard)
    setLocal('favorites', this.favorites)
  }

  *updateData(type: string): any {
    const response = yield fetchData(type) 

    const mappedResponse = response.map((el: { [x: string]: string; login: string; description: string; }) =>{
      return {
        login: el.login,
        description: el.description,
        avatarUrl: el['avatar_url'],
        inFavorites: false,
        type: type,
        orgaznizationsUrl: el['organizations_url'] || undefined,
      }
    })
    //ищем в ответе совпадения с уже имеющимся списком, 
    //и НЕ добавляем, если объект уже присутствовал
    const result = mappedResponse.map((respEl:Iitem) => this.
      favorites?.some((favEl: Iitem) => favEl.login === respEl.login) ? 
        {...respEl, inFavorites: true} :
        respEl
      )
    if (type === 'organizations') this.organizations = result
    if (type === 'users') this.users = result
  }
}

export const AppContext = createContext({} as IContext)