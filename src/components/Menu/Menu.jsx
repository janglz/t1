import S from './Menu.module.css'
import {ReactComponent as FavoritesIcon} from '../../styles/img/favorites.svg'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import cn from 'classnames'



export function Menu () {
const { page, setPage } = useContext(AppContext)
  const handleSetPage = (selected) => {
    setPage(selected)
  }

  return (
    <aside className={S.menu}>
      <ul className={S.content}>
        <li className={S.list__item}>
          <button 
          className={cn(S.btn__transparent, {selected: page === 'favorites'})} 
          onClick={()=>handleSetPage('favorites')}>
            Избранное
            <FavoritesIcon className={S.icon} />
          </button> 
        </li>
        <li className={S.list__item}>
          <button 
          className={cn(S.btn__transparent, {selected: page === 'users'})} 
          onClick={()=>handleSetPage('users')}>
            Пользователи
          </button>
        </li> 
        <li className={S.list__item}>
          <button 
          className={cn(S.btn__transparent, {selected: page === 'organizations'})} 
          onClick={()=>handleSetPage('organizations')}>
            Организации
          </button>
        </li> 
      </ul>
    </aside>
  )
}