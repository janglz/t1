import S from './Card.module.css'
import favoritesIcon from '../../styles/img/favorites.svg'

export function Card() {
  return (
    <section className={S.section}>
      <div className={S.container}>
        <div className={S.content}>
          <div className={S.image}>
            <img src="../styles/img/user-image.jpeg" />
          </div>
          <div className={S.content}>
            <h1 className={S.content__title}>Заголовок</h1>
            <p className={S.content__description}>Описание</p>
          </div>
          <div className={S.btn}>
            <button>
              <object type="image/svg+xml" data={favoritesIcon} id="favorites" className={S.icon}></object>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}