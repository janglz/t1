import S from './Users.module.css'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import favorites from '../../styles/img/favorites.svg'

export function Users () {
  const { users, setCard } = useContext(AppContext)

  return users.length > 0 && users.map(user => (
    <li className={S.contentItem} key={user.id} onClick={() => setCard(user)}>
      <div className={S.itemImg}><img src={user['avatar_url']} /></div>
      <div className={S.value}>
        <h4 className="main-cotent__item-title">{user.login}</h4>
        <p className="main-cotent__item-text">Пользователь</p>
      </div>
      <span className={S.icon}>
        <object type="image/svg+xml" data={favorites} id="favorites" className={S['favorites-icon']}></object>
      </span>
    </li>
  ))
}