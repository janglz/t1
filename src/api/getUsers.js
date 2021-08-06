import { fetchData } from "./fetchData";
/**
 * @param {String} page  
 * @returns {Array of Objects} 
 */
export async function getUsers (page=1) {
  const response = await fetchData('users', page);
  const users = response.map(el =>{
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
  // console.log(users)
  return users
}