import { useState } from "react"

export function useLocalStorage(key, obj) {
  const [local, setLocal] = useState(() => {
    const t = localStorage.getItem(key)
    if (!t) return obj
    try {
      return JSON.parse(t)
    } catch (e) {
      return obj
    }
  })
  return [
    local,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue))
      setLocal(newValue)
    },
  ]
}