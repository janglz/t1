import S from './List.module.css'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import {ReactComponent as FavoritesIcon} from '../../styles/img/favorites.svg'

export function List() {
  const { page, organizations, users, favorites, setCard } = useContext(AppContext)
  let list = [];

  const selectItems = (page) => {
      switch (page) {
        case 'users': 
          return users
        case 'organizations':
          return organizations
        default: 
          return favorites
      }
    }
  list = selectItems(page)

  return list?.length > 0 && list.map(el => (
    <li className={S.contentItem} key={el.id} onClick={() => setCard(el)}>
      <div className={S.itemImg}><img src={el['avatar_url']} /></div>
      <div className={S.value}>
        <h4 className="main-cotent__item-title">{el.login}</h4>
        <p className="main-cotent__item-text">{el?.type}</p>
      </div>
      <span className={S.icon}>
        {el.inFavorites && FavoritesIcon}
      </span>
    </li>
  ))
}