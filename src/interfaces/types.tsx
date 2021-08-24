import {IparsedObj} from './interfaces'
import {z} from 'zod'

export type IparsedResponse = Array<IparsedObj>
const objShape: z.ZodSchema<IparsedObj> = z.object({
  id: z.string().or(z.number()),
  login: z.string(),
  description: z.string().or(z.null()).or(z.undefined()),
  avatar_url: z.string(),
  organizations_url: z.string().or(z.undefined()),
})

type objectsArrayType = Array<IparsedObj>

export const responseShape: z.ZodSchema<objectsArrayType> =
  z.array(objShape)

export const responseType = typeof responseShape
