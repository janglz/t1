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
    console.log(new Error('Fetch type error'))
    return []
  }
  // const url = `https://api.github.com/${query}`
  // console.log(url)
  return await fetch(url).then(async response => {
    const result = await response.json() 
    return result? result : []
  }, 
  (e)=>{
    console.log("there is no data available:", e)
    return []
  })
}