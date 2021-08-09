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
  const [favorites, setFavorites] = useState([])
  const [page, setPage] = useState(null)
  const [card, setCard] = useState(null)
    
    // {
    // // login: 'Поиск',
    // // description: 'Описания нет...',
    // // avatarUrl: '',
    // // inFavorites: false,
    // // orgaznizationsUrl: '',
    // // type: null
    // }
    
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
