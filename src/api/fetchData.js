/**
 * 
 * пока примитивно 
 */

export async function fetchData(query, page) {
  const url = `https://api.github.com/${query}`
  return await fetch(url).then(async response => await response.json(), ()=>{})
}