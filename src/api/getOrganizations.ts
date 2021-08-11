import { fetchData } from "./fetchData";
import { Iitem } from "../interfaces/interfaces";
/**
 * @param {String} page  
 * @returns {Array of Objects} 
 */
export async function getOrganizations (page = 1): Promise<Iitem[]> {
  const response: any[] = await fetchData('organizations', page);
  const organizations: Iitem[] = response.map(el =>{
    return {
      login: el.login,
      description: el.description,
      avatarUrl: el['avatar_url'],
      inFavorites: false,
      type: 'organization',
      orgaznizationsUrl: undefined,
    }
  })
  return organizations
}

