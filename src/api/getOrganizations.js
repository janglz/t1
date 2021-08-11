import { fetchData } from "./fetchData";
/**
 * @param {String} page  
 * @returns {Array of Objects} 
 */
export async function getOrganizations (page=1) {
  const response = await fetchData('organizations', page);
  const organizations = response.map(el =>{
    return {
      login: el.login,
      description: el.description,
      avatarUrl: el['avatar_url'],
      inFavorites: false,
      type: 'organization',
    }
  })
  return organizations
}