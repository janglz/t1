import React from 'react'
import S from './Menu.module.css'
import { ReactComponent as FavoritesIcon } from '../../styles/img/favorites.svg'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../stores/Store'
import cn from 'classnames'
import { getUsers } from '../../api/getUsers'
import { getOrganizations } from '../../api/getOrganizations'
import { useLocalStorage } from '../../api/useLocalStorage'
import { IContext, Iitem } from '../../interfaces/interfaces';

const fetchedUsers = getUsers()
const fetchedOrgs = getOrganizations()


export function Menu () {
  const { 
    users, 
    page, 
    setPage, 
    setUsers, 
    setOrganizations, 
    organizations, 
    setCard, 
    favorites, 
    setFavorites, 
    mobile,
    showMenu, 
    setShowMenu,
  } : IContext = useContext(AppContext)
  const [localFavorites, setLocalFavorites] = useLocalStorage('favorites', favorites);
  const [localUsers, setLocalUsers] = useLocalStorage('users', users)
  const [localOrganizations, setLocalOrganizations] = useLocalStorage('organizations', organizations)

  /**
   * мерджим данные с localStorage
   */
  useEffect(()=> {
    setUsers([
      ...localUsers
      .filter((el: Iitem)=> !users
      .some((local: Iitem) => local.login === el.login )), 
      ...users
    ]);
    setOrganizations([
      ...localOrganizations
      .filter((el: Iitem) => !organizations
      .some((local: Iitem) => local.login === el.login )), 
      ...organizations
    ]);
    setFavorites([
      ...localFavorites
      .filter((el: Iitem) => !favorites
      .some((local: Iitem) => local.login === el.login )), 
      ...favorites
    ])
  }, [])

  useEffect(()=>{
    // setShowMenu(!mobile)
  },[mobile])

  const handleSetFavorites = () => {
    setCard(null)
    setPage('favorites')
    if (mobile) setShowMenu(false)
  }

  /**
   * TODO: 
   * перенести мерджинг в useEffect
   */

  const handleSetOrgs = async () => {
    setCard(null)
    setPage('organizations')
    const newOrgs = await fetchedOrgs
    const merged = [...newOrgs.filter(el => !organizations.some((org: Iitem) => org.login === el.login )), ...organizations]
    setOrganizations(merged)
    if (mobile) setShowMenu(false)
  }

  const handleSetUsers = async () => {
    setCard(null)
    setPage('users')
    const newUsers = await fetchedUsers
    const merged = [...newUsers.filter(el => !users.some((user: Iitem) => user.login === el.login )), ...users]
    setUsers(merged)
    if (mobile) setShowMenu(false)
  }

  // const bindedStyle = cn.bind(S)

  return showMenu && (
    <div className={mobile ? S.overlay : undefined}>
    <aside className={cn(S.menu, mobile && S.mobile)}>
      <ul className={S.content}>
        <li className={S.list__item}>
          <button 
          className={cn(S.btn__transparent, page === 'favorites' && S.selected)} 
          onClick={()=>handleSetFavorites()}>
            Избранное
            <FavoritesIcon className={S.icon} />
          </button> 
        </li>
        <li className={S.list__item}>
          <button 
          className={cn(S.btn__transparent, page === 'users' && S.selected)} 
          onClick={()=>handleSetUsers()}>
            Пользователи
          </button>
        </li> 
        <li className={S.list__item}>
          <button 
          className={cn(S.btn__transparent, page === 'organizations' && S.selected)} 
          onClick={()=>handleSetOrgs()}>
            Организации
          </button>
        </li> 
      </ul>
    </aside>
    </div>
  )
}