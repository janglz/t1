import S from './Menu.module.css'
import {ReactComponent as FavoritesIcon} from '../../styles/img/favorites.svg'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'



export function Menu () {
const { page, setPage } = useContext(AppContext)

  return (
    <aside className={S.menu}>
      <ul className={S.content}>
        <li className={S.list__item}>
          <button className={S.btn__transparent} onClick={setPage('favorites')}>Избранное</button>
        </li>
        <li className={S.list__item}>
          <button className={S.btn__transparent} onClick={setPage('users')}>Пользователи</button>
        </li> 
        <li className={S.list__item}>
          <button className={S.btn__transparent} onClick={setPage('organizations')}>Организации</button>
        </li> 
      </ul>
    </aside>
  )
}