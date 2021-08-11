import { fetchData } from "./fetchData";
import { Iitem } from "../interfaces/interfaces";
/**
 * @param {String} page  
 * @returns {Array of Objects} 
 */
export async function getUsers (page = 1): Promise<Iitem[]> {
  const response: any[] = await fetchData('users', page);
  const users: Iitem[] = response.map(el =>{
    return {
      login: el.login,
      description: el.description,
      avatarUrl: el['avatar_url'],
      inFavorites: false,
      orgaznizationsUrl: el['organizations_url'],
      type: 'user'
      // ": "https://api.github.com/users/mojombo/orgs"
    }
  })
  return users
}