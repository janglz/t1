/**
 * пока примитивно 
 */

export async function fetchData(type: string): Promise<[]> {
  let url;
  switch ( type ){
    case 'users':
      url = `https://api.github.com/users`;
      break
    case 'organizations':
      url = `https://api.github.com/organizations`
      break
    default: 
    console.log(new Error('Fetch data error'))
    return []
  }
  // const url = `https://api.github.com/${query}`
  return await fetch(url).then(async response => await response.json(), 
  (e)=>{
    console.log("there is no data available:", e)
  })
}