import S from './Favorites.module.css'
import favoritesIcon from '../../styles/img/favorites.svg'



export function Favorites () {
  return (
    <aside className={S.favorites}>
    <span>
      <object type="image/svg+xml" data={favoritesIcon} id="favorites" className={S.icon}></object>
      Избранное</span>
    <ul className={S.content}>
      {/* <li className={S.favorites-content__item}>repo 1</li>
      <li className={S.favorites-content__item}>repo 2</li>
      <li className={S.favorites-content__item}>repo 3</li> */}
    </ul>
  </aside>
  )
}