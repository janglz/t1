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
    fetchData
  } : IContext = useContext(AppContext)

  const [localFavorites, ] = useLocalStorage('favorites', favorites);
  const [localUsers, ] = useLocalStorage('users', users);
  const [localOrganizations, ] = useLocalStorage('organizations', organizations);
  const [animation, setAnimation] = useState(false)

  /**
   * забираем данные с localStorage
   */
  
  useEffect(()=> {
    const newUsrs = localUsers || []
    const newOrgs = localOrganizations || []
    const newFavs = localFavorites || []

    setUsers(newUsrs)
    setOrganizations(newOrgs)
    setFavorites(newFavs)
  }, [])

  useEffect(()=>{
    setShowMenu(true)
  },[mobile])

  /**
   * запуск анимации в моб версии
   * 
   */
  useEffect(()=>{
    window.requestAnimationFrame(()=> setAnimation(!!showMenu))
  }, [showMenu])

  const handleSetFavorites = () => {
    if (mobile) {
      window.requestAnimationFrame(()=> setAnimation(false))
      setTimeout(()=>{
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
   * переименовать функцию fetchData и может разнести на несколько
   */

  const handleSetOrgs = async () => {
    
    fetchData('organizations', 'organizations')

    if (mobile) {
      window.requestAnimationFrame(()=> setAnimation(false))
      setTimeout(()=>{
        setCard(null)
        setPage('organizations')
        setShowMenu(false)
      }, 200)
    } else {
      setCard(null)
      setPage('organizations')
    }
  }

  const handleSetUsers = async () => {
    fetchData('users', 'users')

    if (mobile) {
      window.requestAnimationFrame(()=> setAnimation(false))
      setTimeout(()=>{
        setCard(null)
        setPage('users')
        setShowMenu(false)
      }, 200)
    } else {
      setCard(null)
      setPage('users')
    }
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (mobile) {
      setAnimation(false)
      setTimeout(()=>{
        setShowMenu(false)
      }, 200)
    }
  }

  return showMenu ? (
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