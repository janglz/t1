import { createContext, useState } from 'react';
import usersData from '../db/users.json'
import organizationsData from '../db/organizations.json'
import { getUsers } from '../api/getUsers';
import { getOrganizations } from '../api/getOrganizations';

export const AppContext = createContext(null)

export function useStore () {
  // const usersData = getUsers()
  // const organizationsData = getOrganizations()

  const [users, setUsers] = useState([])
  const [organizations, setOrganizations] = useState([])
  const [favorites, setFavorites] = useState(null)
  const [page, setPage] = useState('initial')
  const [card, setCard] = useState({})
  
  return {
    page, // Вероятно, сюда впоследствии можно будет сохранять ссылку?
    setPage,
    users,
    setUsers,
    organizations,
    setOrganizations,
    favorites,
    setFavorites,
    card, 
    setCard,
  }
}
