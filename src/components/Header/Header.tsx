import React from 'react'
import S from './Header.module.css'
import logo from '../../styles/img/logo.svg'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import { ReactComponent as HamburgerIcon } from '../../styles/img/menu.svg'
import { observer } from 'mobx-react'

export const Header = observer((): JSX.Element | null => {
  const { 
    mobile, 
    showMenu, 
    setShowMenu 
  } = useContext(AppContext).UIStore

  return (
    <header className={S.header}>
      <div className={S.container}>
        <div className={S['header-navbar']}>
          {mobile && 
          <button 
            className={S.hamburger}
            onClick={() => {
              setShowMenu(!showMenu)
            }} 
            >
            <HamburgerIcon className={S.hamburger__icon}/>
          </button>}
          <a className={S['navbar-brand']} href="#">
            <img src={logo} id="logo" className={S['brand-icon']}></img>
          </a>
        </div>
      </div>
    </header>
  )
})