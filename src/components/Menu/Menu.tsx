import React, { useState } from 'react'
import S from './Menu.module.css'
import { ReactComponent as FavoritesIcon } from '../../styles/img/favorites.svg'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../stores/Store'
import cn from 'classnames'
import { getUsers } from '../../api/getUsers'
import { getOrganizations } from '../../api/getOrganizations'
import { useLocalStorage } from '../../api/useLocalStorage'
import { IContext, Iitem } from '../../interfaces/interfaces';
import { observer } from 'mobx-react'

const fetchedUsers = getUsers()
const fetchedOrgs = getOrganizations()

export const Menu = observer((): JSX.Element | null => {
  let {
    // users, 
    // organizations, 
    // favorites, 
    // showMenu, 
    // card, 
    // page 
  } = useContext(AppContext)
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
  // console.log(setUsers)
  const [localFavorites, ] = useLocalStorage('favorites', favorites);
  const [localUsers, ] = useLocalStorage('users', users);
  const [localOrganizations, ] = useLocalStorage('organizations', organizations);
  const [animation, setAnimation] = useState(false)

  console.log(useContext(AppContext))
  /**
   * забираем данные с localStorage
   */
  
  useEffect(()=> {
    const newUsrs = localUsers || []
    const newOrgs = localOrganizations || []
    const newFavs = localFavorites || []
    // users = newUsrs
    // organizations = newOrgs
    // favorites = newFavs

    setUsers(newUsrs)
    setOrganizations(newOrgs)
    setFavorites(newFavs)
  }, [])

  useEffect(()=>{
    // setShowMenu(!mobile)
    setShowMenu(true)
    // showMenu = true
  },[mobile])

  /**
   * запуск анимации 
   * 
   */
  useEffect(()=>{
    // setAnimation(true)
    window.requestAnimationFrame(()=> setAnimation(!!showMenu))
  }, [showMenu])

  const handleSetFavorites = () => {
    if (mobile) {
      window.requestAnimationFrame(()=> setAnimation(false))
      setTimeout(()=>{
        // showMenu = false;
        // card = null;
        // page = 'favorites';
        setShowMenu(false)
        setCard(null)
        setPage('favorites')
      }, 200)
    } else {
      setCard(null)
      setPage('favorites')
    }
    
  }

  /**
   * TODO: 
   * перенести мерджинг 
   */

  const handleSetOrgs = async () => {
    const newOrgs = await fetchedOrgs
    const merged = organizations ? 
    [...newOrgs.filter(el => !organizations?.some((org: Iitem) => org.login === el.login )), ...organizations]:
    newOrgs

    if (mobile) {
      window.requestAnimationFrame(()=> setAnimation(false))
      setTimeout(()=>{
        // showMenu = false;
        // organizations = merged;
        // card = null;
        // page = 'organizations';


        setCard(null)
        setPage('organizations')
        setOrganizations(merged)
        setShowMenu(false)
      }, 200)
    } else {
      setCard(null)
      setPage('organizations')
      setOrganizations(merged)
    }
    console.log(merged, page)
  }

  const handleSetUsers = async () => {
    const newUsers = await fetchedUsers
    const merged = users ? 
    [...newUsers.filter(el => !users?.some((user: Iitem) => user.login === el.login )), ...users]:
    newUsers

    if (mobile) {
      window.requestAnimationFrame(()=> setAnimation(false))
      setTimeout(()=>{
        // card = null;
        // page = 'users';
        // users = merged;
        // showMenu = false;
        setCard(null)
        setPage('users')
        setUsers(merged)
        setShowMenu(false)
      }, 200)
    } else {
      setCard(null)
      setPage('users')
      setUsers(merged)
    }
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    // console.log(e)
    if (mobile) {
      setAnimation(false)
      setTimeout(()=>{
        // showMenu = false
        setShowMenu(false)
      }, 200)
    }
  }

  return showMenu ? (
    // return (
    <div 
      className={mobile ? S.overlay : undefined}
      onClick={(e) => handleOverlayClick(e)}
    >
    <aside className={cn(S.menu, mobile && `${S.mobile} ${animation ? S.opening : S.closing }`)}>
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
  ) : null
})