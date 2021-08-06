import S from './Card.module.css'
import {ReactComponent as FavoritesIcon} from '../../styles/img/favorites.svg'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'

export function Card() {
  const { card, page } = useContext(AppContext)
  const favoritesPage = page === 'favorites';
  const usersPage = page === 'users';
  const organizationsPage = page === 'organizations';



  return (
    <section className={S.section}>
      <div className={S.container}>
        <div className={S.content}>
          <div className={S.image}>
            <img src={card.avatarUrl} />
          </div>
          <div className={S.content__inner}>
            <h1 className={S.content__title}>{card.login}</h1>
            <p className={S.content__description}>{card.description}</p>
            {usersPage && <p className={S.content__description}>Состоит в организациях:</p>}
            {usersPage && <p className={S.content__description}>{card.orgaznizationsUrl}</p>}
          </div>
          <div className={S.btn}>
            <button>
              <div className={S.icon}>
              <FavoritesIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}