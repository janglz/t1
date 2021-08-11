
export interface IContext { 
  users: []
  organizations: [] 
  favorites: [] 
  page: string  | null
  card: Iitem | null
  mobile: boolean | null
  showMenu: boolean | null
  setUsers: ([]) => Iitem[]
  setOrganizations: ([]) => []
  setFavorites: ([]) => [] | null
  setPage: (arg: string | null) => void 
  setCard: (arg: Iitem | null) => void 
  setShowMenu: (arg: boolean) => void 
}

export interface Iitem {
  login: string
  description:string
  avatarUrl: string
  inFavorites: boolean | undefined
  orgaznizationsUrl: string | undefined
  type: string
}