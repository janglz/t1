import S from './Header.module.css'
import logo from '../../styles/img/logo.svg'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'

export function Header () {
  const { setPage } = useContext(AppContext)

  return (
    <header className={S.header}>
      <div className={S.container}>
        <div className={S['header-navbar']}>
          <a className={S['navbar-brand']} href="#">
            <object type="image/svg+xml" data={logo} id="logo" className={S['brand-icon']}></object>
          </a>
          <nav className={S.navbar}>
            <ul className={S.content}>
              <li onClick={() => setPage('initial')} className={S['navbar-content__item']}><a href="#">Главная</a></li>
              <li onClick={() => setPage('users')} className={S['navbar-content__item']}><a href="#">Пользователи</a></li>
              <li onClick={() => setPage('organizations')} className={S['navbar-content__item']}><a href="#">Организации</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}