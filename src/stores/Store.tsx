
import { createContext } from 'react';
import { IContext, Iitem } from '../interfaces/interfaces';
import { fetchData } from '../api/fetchData';

import { makeAutoObservable } from "mobx";

export class Store {
  users;
  organizations;
  page;
  favorites;
  card;
  showMenu;
  mobile;
  windowSize;

  constructor
  (
    users: Iitem[]|null, 
    organizations: Iitem[]|null, 
    favorites: Iitem[]|null, 
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
  setFavorites (favorites: Iitem[] | null): void {
    this.favorites = favorites
  }
  setCard (card: Iitem | null): void {
    this.card = card
  }

  *updateData(type: string): any {
    const response = yield fetchData(type)
    
    const mappedResponse = response.map((el: { [x: string]: any; login: any; description: any; }) =>{
      return {
        login: el.login,
        description: el.description,
        avatarUrl: el['avatar_url'],
        inFavorites: false,
        type: type,
        orgaznizationsUrl: el['organizations_url'] || undefined,
      }
    })
    let target: Iitem[] | null = null;
    if (type === 'users') 
    target = !!this.users ? 
    [...mappedResponse.filter((el: { login: string; }) => !this.users?.some((org: Iitem) => org.login === el.login )), ...this.users]:
    mappedResponse
    this.setUsers(target)
    if (type === 'organizations') 
    target = !!this.organizations ? 
    [...mappedResponse.filter((el: { login: string; }) => !this.organizations?.some((org: Iitem) => org.login === el.login )), ...this.organizations]:
    mappedResponse
    this.setOrganizations(target)
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