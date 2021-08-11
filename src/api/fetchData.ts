/**
 * пока примитивно 
 */

export async function fetchData(query: string, page: number): Promise<[]> {
  const url = `https://api.github.com/${query}`
  return await fetch(url).then(async response => await response.json(), 
  ()=>{
    console.log("there is no data available")
  })
}