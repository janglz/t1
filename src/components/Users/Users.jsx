import S from './Users.module.css'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'

export function Users () {
  const { users, setUsers } = useContext(AppContext)

  return !!users && users.map(user => {
    (
      <li class="main-navbar-content__item" key={user.id}>
        <div class="main-content__item-img"><img src="../styles/img/user-image.jpeg" /></div>
        <div class="main-cotent__item-value">
          <h4 class="main-cotent__item-title">{user.name}</h4>
          <p class="main-cotent__item-text">Пользователь</p>
        </div>
        <span class="search-icon">
          <object type="image/svg+xml" data={user['avatar_url']} id="favorites" class="favorites-icon"></object>
        </span>
      </li>
    )
  })
}