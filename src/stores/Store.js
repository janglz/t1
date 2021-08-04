import { createContext, useState } from 'react';
import usersData from '../db/users.json'
import organizationsData from '../db/organizations.json'

export const AppContext = createContext(null)

export function useStore () {
  const [users, setUsers] = useState(usersData)
  const [organizations, setOrganizations] = useState(organizationsData)
  const [favorites, setFavorites] = useState(null)
  const [page, setPage] = useState('initial')
  
  return {
    page: page, // Вероятно, сюда впоследствии можно будет сохранять ссылку?
    setPage: setPage,
    users: users,
    setUsers: setUsers,
    organizations: organizations,
    setOrganizations,
    favorites: favorites,
    setFavorites,
  }
}
