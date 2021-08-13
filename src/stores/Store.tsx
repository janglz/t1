
import { createContext, useState } from 'react';
import { useWindowSize } from '../api/useWindowSize';
import { IContext, Iitem } from '../interfaces/interfaces';

import { action, observable, makeObservable, computed, flow } from "mobx";

export class Store {
  users;
  organizations;
  page;
  favorites;
  card;
  showMenu;

  constructor(
    users: Iitem[]|null, 
    organizations: Iitem[]|null, 
    favorites: Iitem[]|null, 
    page: string|null, 
    card: Iitem|null, 
    showMenu: boolean) {
    makeObservable(this, {
      page: observable,
      setPage: action,
      users: observable,
      setUsers: action,
      organizations: observable,
      setOrganizations: action,
      favorites: observable,
      setFavorites: action,
      card: observable,
      setCard: action,
      mobile: computed,
      showMenu: observable,
      setShowMenu: action,
      fetch: flow,
    })
    this.users = users
    this.organizations = organizations;
    this.favorites = favorites;
    this.page = page;
    this.card = card;
    this.showMenu = showMenu;
  }

  get mobile(): boolean {
    return window.innerWidth < 900
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
  setFavorites (favorites: Iitem[] | null): void {
    this.favorites = favorites
  }
  setCard (card: Iitem | null): void {
    this.card = card
  }

  *fetch(query: string, type: string): any {
    const response = yield fetch(`https://api.github.com/${query}`)
      .then(async response => await response.json(),
      (e) => {
        console.log("there is no data available:", e)
      })
    if (type === 'users') this.users = response;
    if (type === 'organizations') this.organizations = response
  }
}

export const AppContext = createContext({} as IContext)





// export const AppContext = createContext({} as IContext)

// export function useStore():IContext {
//   const [users, setUsers] = useState<Iitem[]|null>([])
//   const [organizations, setOrganizations] = useState<Iitem[] | null>(null)
//   const [favorites, setFavorites] = useState<Iitem[] | null>(null)
//   const [page, setPage] = useState<string | null>(null)
//   const [card, setCard] = useState<Iitem | null>(null)
//   const [showMenu, setShowMenu] = useState(true)
//   const [width,] = useWindowSize()

//   return {
//     page, // Вероятно, сюда впоследствии можно будет сохранять ссылку?
//     setPage,
//     users,
//     setUsers,
//     organizations,
//     setOrganizations,
//     favorites,
//     setFavorites,
//     card, 
//     setCard,
//     mobile: width < 900,
//     showMenu,
//     setShowMenu,
//   }
// }