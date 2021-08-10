import S from './List.module.css'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import { ReactComponent as FavoritesIcon } from '../../styles/img/favorites.svg'
import { useLocalStorage } from '../../api/useLocalStorage'

export function List({ filtered }) {
  const { setCard } = useContext(AppContext)

  return filtered?.length > 0 && filtered.map(el => (
    <li className={S.contentItem} key={el.login} onClick={() => setCard(el)}>
      <div className={S.itemImg}><img src={el.avatarUrl} /></div>
      <div className={S.value}>
        <h4 className="main-cotent__item-title">{el.login}</h4>
        <p className="main-cotent__item-text">{el.type}</p>
      </div>
      <span className={S.icon}>
        {el.inFavorites && <FavoritesIcon/>}
      </span>
    </li>
  ))
}