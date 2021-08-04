import S from './Users.module.css'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import favorites from '../../styles/img/favorites.svg'

export function Users () {
  const { users } = useContext(AppContext)

  return users.length > 0 && users.map(user => (
    <li className={S.contentItem} key={user.id}>
      <div className={S.itemImg}><img src={user['avatar_url']} /></div>
      <div className={S.value}>
        <h4 class="main-cotent__item-title">{user.login}</h4>
        <p class="main-cotent__item-text">Пользователь</p>
      </div>
      <span class="search-icon">
        <object type="image/svg+xml" data={favorites} id="favorites" class="favorites-icon"></object>
      </span>
    </li>
  ))
}