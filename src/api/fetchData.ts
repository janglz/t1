import { IadditionalData } from "../interfaces/interfaces";

export async function fetchData(type: string, page = ''): Promise<string[] | IadditionalData> {
  let url;
  switch ( type ){
    case 'users':
      url = `https://api.github.com/users${page}`;
      break
    case 'organizations':
      url = `https://api.github.com/organizations${page}`
      break
    default: 
    console.log(new Error('Fetch type error'))
    return []
  }
  // const url = `https://api.github.com/${query}`
  // console.log(url)
  return await fetch(url, {headers: {Accept: 'application/vnd.github.full+json'}}).then(async response => {
    const result = await response.json() 
    // console.log(result)
    return result? result : []
  }, 
  (e)=>{
    console.log("there is no data available:", e)
    return []
  })
}