
export interface IContext { 
  users: []
  organizations: []
  page: string  | null
  setPage: (arg: string | null) => void
  setUsers: ([]) => [] 
  setOrganizations: ([]) => []
  setCard: (arg: object | null) => void
  favorites: []
  setFavorites: ([]) => [] | null
  mobile: boolean | null
  showMenu: boolean | null
  setShowMenu: (arg: boolean) => void
}

export interface Iitem {
  login: string
  description:string
  avatarUrl: string
  inFavorites: boolean
  orgaznizationsUrl: string | undefined
  type: string
}