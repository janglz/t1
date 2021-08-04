import S from './Organizations.module.css'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'

export function Organizations () {
  const { organizations, setOrganizations } = useContext(AppContext)
  // console.log(organizations)
  const mapped = organizations.map(org => (
    <li class="main-navbar-content__item" key={org.id}>
    <div class="main-content__item-img"><img src="../styles/img/user-image.jpeg" /></div>
    <div class="main-cotent__item-value">
      <h4 class="main-cotent__item-title">{org.name}</h4>
      <p class="main-cotent__item-text">Организация</p>
    </div>
    <span class="search-icon">
      <object type="image/svg+xml" data={org['avatar_url']} id="favorites" class="favorites-icon"></object>
    </span>
  </li>
    )
  )
  // return null
  return !!mapped && mapped
}