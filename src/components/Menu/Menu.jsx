import S from './Menu.module.css'
import {ReactComponent as FavoritesIcon} from '../../styles/img/favorites.svg'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import cn from 'classnames'
import { getUsers } from '../../api/getUsers'
import { getOrganizations } from '../../api/getOrganizations'
import { noCard } from '../../api/noCard'
// import { useLocalStorage } from '../../api/useLocalStorage'

const fetchedUsers = getUsers()
const fetchedOrgs = getOrganizations()

export function Menu () {
  const { users, page, setPage, setUsers, setOrganizations, organizations, setCard, favorites } = useContext(AppContext)
  
  /**
   * Думаю, тут вспоследствии можно добавить че-то типа useMemo или useLocalStorage, 
   * и не фетчить каждый раз инфу
   */


  const handleSetFavorites = () => {
    setCard(noCard)
    setPage('favorites')
  }

  const handleSetOrgs = async () => {
    setPage('organizations')
    const merged = Array.from(new Set([...organizations, ...await fetchedOrgs]))
    setOrganizations(merged)
  }

  const handleSetUsers = async () => {
    // setCard(noCard)
    setPage('users')
    const merged = Array.from(new Set([...users, ...await fetchedUsers]))
    setUsers(merged)
  }

  /**
   * cn так и не перекрашивает элемент, почему?
   */

  return (
    <aside className={S.menu}>
      <ul className={S.content}>
        <li className={S.list__item}>
          <button 
          className={cn(S.btn__transparent, {selected: page === 'favorites'})} 
          onClick={()=>handleSetFavorites()}>
            Избранное
            <FavoritesIcon className={{icon__active: S.icon}} />
          </button> 
        </li>
        <li className={S.list__item}>
          <button 
          className={cn(S.btn__transparent, {selected: page === 'users'})} 
          onClick={()=>handleSetUsers()}>
            Пользователи
          </button>
        </li> 
        <li className={S.list__item}>
          <button 
          className={cn(S.btn__transparent, {selected: page === 'organizations'})} 
          onClick={()=>handleSetOrgs()}>
            Организации
          </button>
        </li> 
      </ul>
    </aside>
  )
}