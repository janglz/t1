import {IadditionalData, IparsedObj} from './interfaces'
import {z} from 'zod'

export type IparsedResponse = Array<IparsedObj>
const objShape: z.ZodSchema<IparsedObj> = z.object({
  id: z.string().or(z.number()),
  login: z.string(),
  description: z.string().or(z.null()).or(z.undefined()),
  avatar_url: z.string(),
  organizations_url: z.string().or(z.undefined()),
})

export const additionalShape: z.ZodSchema<IadditionalData> =
  z.object({
    name: z.string().or(z.undefined()).or(z.null()),
    blog: z.string().or(z.undefined()).or(z.null()),
    location: z.string().or(z.undefined()).or(z.null()),
    followers: z.string().or(z.undefined()).or(z.number()),
    following: z.string().or(z.undefined()).or(z.number()),
    public_repos: z
      .string()
      .or(z.undefined())
      .or(z.number()),
    html_url: z.string().or(z.undefined()).or(z.null()),
  })

type objectsArrayType = Array<IparsedObj>

export const responseShape: z.ZodSchema<objectsArrayType> =
  z.array(objShape)

export const responseType = typeof responseShape
