import React, { useState } from 'react'
import S from './Menu.module.css'
import { ReactComponent as FavoritesIcon } from '../../styles/img/favorites.svg'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { AppContext } from '../../stores/Store'
import cn from 'classnames'
import { IContext } from '../../interfaces/interfaces';
import { observer } from 'mobx-react'

export const Menu = observer((): JSX.Element | null => {
  const { 
    page, 
    setPage, 
    setCard, 
    mobile,
    showMenu, 
    setShowMenu,
    updateData,
    setMobile,
  } : IContext = useContext(AppContext)

  const [animation, setAnimation] = useState(false)

  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

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

  const resize = () => setMobile(window.innerWidth < 900 ? true : false)

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
   * переименовать функцию updateData и может разнести на несколько
   */

  const handleSetOrgs = async () => {
    await updateData('organizations')

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
    await updateData('users')

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