
export interface IContext { 
  users: Iitem[]|null
  organizations: Iitem[]|null 
  favorites: Iitem[]|[] 
  card: Iitem | null
  // page: string  | null
  // mobile: boolean | null
  // showMenu: boolean | null
  searchQuery: string
  setUsers: (arg: Iitem[]|null) => void
  setOrganizations: (arg: Iitem[]|null) => void
  toggleFavorites: (arg: Iitem | null) => void
  setCard: (arg: Iitem | null) => void 
  // setMobile: (arg: boolean) => void
  // setPage: (arg: string | null) => void 
  // setShowMenu: (arg: boolean) => void 
  updateData: (query: string) => void
  setSearchQuery: (query: string) => void
  searchFavorites: Iitem[]
  initApp(): void
  UIStore: IUIStore
}

export interface Iitem {
  login: string
  description:string
  avatarUrl: string
  inFavorites: boolean | undefined
  orgaznizationsUrl: string | undefined
  type: string
}

export interface IUIStore {
  page: string  | null
  mobile: boolean | null
  showMenu: boolean | null
  setMobile: (arg: boolean) => void
  setPage: (arg: string | null) => void 
  setShowMenu: (arg: boolean) => void 
}