
export interface IContext { 
  users: Iitem[]|null
  organizations: Iitem[]|null 
  favorites: Iitem[]|null 
  page: string  | null
  card: Iitem | null
  // mobile: () => boolean
  mobile: boolean | null
  showMenu: boolean | null
  setMobile: (arg: boolean) => void
  setUsers: (arg: Iitem[]|null) => void
  setOrganizations: (arg: Iitem[]|null) => void
  setFavorites: (arg: Iitem[]|null) => void
  setPage: (arg: string | null) => void 
  setCard: (arg: Iitem | null) => void 
  setShowMenu: (arg: boolean) => void 
  updateData: (query: string) => any
}

export interface Iitem {
  login: string
  description:string
  avatarUrl: string
  inFavorites: boolean | undefined
  orgaznizationsUrl: string | undefined
  type: string
}