import {z} from 'zod'

export interface IContext {
  users: Iitem[] | null
  organizations: Iitem[] | null
  favorites: Iitem[] | []
  card: Iitem | null
  searchQuery: string
  setUsers: (arg: Iitem[] | null) => void
  setOrganizations: (arg: Iitem[] | null) => void
  toggleFavorites: (arg: Iitem | null) => void
  setCard: (arg: Iitem | null) => void
  updateData: (type: string, page: string) => void
  setSearchQuery: (query: string) => void
  searchFavorites: Iitem[]
  initApp(): void
  UIStore: IUIStore
}

export interface Iitem {
  login: string
  description: string | null | undefined
  avatarUrl: string
  inFavorites: boolean | undefined
  orgaznizationsUrl: string | undefined
  type: string
}

export interface IUIStore {
  page: string | null
  mobile: boolean | null
  showMenu: boolean | null
  loading: boolean
  setMobile: (arg: boolean) => void
  setPage: (arg: string | null) => void
  setShowMenu: (arg: boolean) => void
  setLoading: (arg: boolean) => void
}

export interface IparsedObj {
  login: string
  description?: string | null
  avatar_url: string
  organizations_url?: string
}

const objShape: z.ZodSchema<IparsedObj> = z.object({
  login: z.string(),
  description: z.string().or(z.null()).or(z.undefined()),
  avatar_url: z.string(),
  organizations_url: z.string().or(z.undefined()),
})

type objectsArrayType = Array<IparsedObj>

export const responseShape: z.ZodSchema<objectsArrayType> =
  z.array(objShape)

export const responseType = typeof responseShape

// type parsedObj = z.infer<typeof responseShape>

// type responseShape = {
//   login: string
//   description:string
//   'avatar_url': string
//   'organizations_url': string | undefined
// }
