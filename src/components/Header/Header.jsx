import S from './Header.module.css'
import logo from '../../styles/img/logo.svg'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import gitlogo from '../../styles/img/logo.svg'
import cn from 'classnames'

export function Header () {
  const { setPage, setCard } = useContext(AppContext)
  const handleSelectPage = (page) => {
    setPage(page);
    if (page === 'initial') setCard({
      login: 'Поиск',
      description: 'Ничего не выбрано',
      'avatar_url': gitlogo,
    })
  }

  /**
   * Надо прописать нормальные имена классов + добавить активный класс для выбранного раздела
   * 
   */

  return (
    <header className={S.header}>
      <div className={S.container}>
        <div className={S['header-navbar']}>
          <a className={S['navbar-brand']} href="#">
            <object type="image/svg+xml" data={logo} id="logo" className={S['brand-icon']}></object>
          </a>
          <nav className={S.navbar}>
            <ul className={S.content}>
              <li onClick={() => handleSelectPage('initial')} className={S['navbar-content__item']}><a href="#">Главная</a></li>
              <li onClick={() => handleSelectPage('users')} className={S['navbar-content__item']}><a href="#">Пользователи</a></li>
              <li onClick={() => handleSelectPage('organizations')} className={S['navbar-content__item']}><a href="#">Организации</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}