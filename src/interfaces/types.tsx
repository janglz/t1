import {IparsedObj, responseShape} from './interfaces'
import {z} from 'zod'

export type IparsedResponse = Array<IparsedObj>
// export type responseType = z.infer<typeof responseShape>
