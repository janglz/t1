import S from './Organizations.module.css'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import favorites from '../../styles/img/favorites.svg'

export function Organizations() {
  const { organizations, setCard } = useContext(AppContext)

  return organizations.length > 0 && organizations.map(org => (
    <li className={S.contentItem} key={org.id} onClick={() => setCard(org)}>
      <div className={S.itemImg}><img src={org['avatar_url']} /></div>
      <div className={S.value}>
        <h4 className="main-cotent__item-title">{org.login}</h4>
        <p className="main-cotent__item-text">Организация</p>
      </div>
      <span className={S.icon}>
        <object type="image/svg+xml" data={favorites} id="favorites" className="icon"></object>
      </span>
    </li>
  ))
}