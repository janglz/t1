import React from 'react';
import { createContext, useState } from 'react';
import { useWindowSize } from '../api/useWindowSize';
import { IContext } from '../interfaces/interfaces';

export const AppContext = createContext({} as IContext)
// export const AppContext = React.createContext<Partial<IContext>>({

// })

export function useStore () {
  const [users, setUsers] = useState([])
  const [organizations, setOrganizations] = useState([])
  const [favorites, setFavorites] = useState([])
  const [page, setPage] = useState(null)
  const [card, setCard] = useState(null)
  const [showMenu, setShowMenu] = useState(true)
  const [width, height] = useWindowSize()
    
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
    mobile: width < 900,
    showMenu,
    setShowMenu,
  }
}
