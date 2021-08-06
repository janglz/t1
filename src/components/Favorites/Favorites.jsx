import {ReactComponent as FavoritesIcon} from '../../styles/img/favorites.svg'
import S from './Users.module.css'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'

export function Users () {
  const { favorites, setCard } = useContext(AppContext)

  return favorites.length > 0 && favorites.map(item => (
    <li className={S.contentItem} key={item.id} onClick={() => setCard(item)}>
      <div className={S.itemImg}><img src={item['avatar_url']} /></div>
      <div className={S.value}>
        <h4 className="main-cotent__item-title">{item.login}</h4>
        <p className="main-cotent__item-text">{item.type}</p>
      </div>
      <span className={S.icon}>
        <FavoritesIcon />
      </span>
    </li>
  ))
}