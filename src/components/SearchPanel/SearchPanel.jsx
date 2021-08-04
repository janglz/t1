import S from './SearchPanel.module.css'
import favoritesIcon from '../../styles/img/favorites.svg'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import { Organizations } from  '../Organizations/Organizations'
import {Users} from  '../Users/Users'



export function SearchPanel () {
  const { page } = useContext(AppContext)

  return (
    <aside className={S.menu}>
      <div className={S.search}>
        <span className={S.searchIcon}>
          <object type="image/svg+xml" data="../styles/img/search.svg" id="search" className={S.searchIcon}></object>
        </span>
        <form className={S.form} action="#" method="GET">
          <input type="search" id="search" placeholder="Найти..." autofocus />
        </form>
        <span className={S.filter}>
          <object type="image/svg+xml" data="../styles/img/filter.svg" id="filter" className={S.filterIcon}></object>
        </span>
      </div>
      <nav className={S.navbar}>
        <ul className={S.content}>
          {page === 'users' ? <Users /> : <Organizations />}
        </ul>
      </nav>
    </aside>
  )
}