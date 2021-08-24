export interface IContext {
  users: Iitem[] | []
  organizations: Iitem[] | []
  favorites: Iitem[] | []
  card: Iitem | null
  searchQuery: string
  filteredBy: string
  apiQuery: string
  error: string | null
  setUsers: (arg: Iitem[] | []) => void
  setOrganizations: (arg: Iitem[] | []) => void
  toggleFavorites: (arg: Iitem | null) => void
  setCard: (arg: Iitem | null) => void
  updateData: (type: string, page: string) => void
  setSearchQuery: (query: string) => void
  searchFavorites: Iitem[]
  initApp(): void
  setFilteredBy: (string: string) => void
  setApiQuery(category: string): void
  UIStore: IUIStore
}

export interface Iitem {
  id: string | number
  login: string
  description?: string | null | undefined
  avatarUrl: string
  inFavorites?: boolean | undefined
  orgaznizationsUrl?: string | undefined
  type: string
}

export interface IUIStore {
  page: string | null
  mobile: boolean | null
  showMenu: boolean | null
  loading: boolean
  animation: boolean
  filter: boolean
  setMobile: (arg: boolean) => void
  setPage: (arg: string | null) => void
  setShowMenu: (arg: boolean) => void
  setLoading: (arg: boolean) => void
  setAnimation: (arg: boolean) => void
  setFilter: (arg: boolean) => void
}

export interface IparsedObj {
  id: string | number
  login: string
  description?: string | null
  avatar_url: string
  organizations_url?: string
}
