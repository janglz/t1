import S from './Card.module.css'
import favoritesIcon from '../../styles/img/favorites.svg'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'

export function Card() {
  const { card, page } = useContext(AppContext)

  return (
    <section className={S.section}>
      <div className={S.container}>
        {page === 'initial' ? (
        <div className={S.content}>
          <h1>Поиск по гитхабу</h1>
        </div>
        ) : (
        <div className={S.content}>
          <div className={S.image}>
            <img src={card['avatar_url']} />
          </div>
          <div className={S.content__inner}>
            <h1 className={S.content__title}>{card.login}</h1>
            <p className={S.content__description}>{card.description}</p>
            <p className={S.content__description}>Состоит в организации:</p>
            <p className={S.content__description}>{card['organizations_url']}</p>
          </div>
          <div className={S.btn}>
            <button>
              <img src={favoritesIcon} id="favorites" className={S.icon}></img>
            </button>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}