import S from './Card.module.css'
import {ReactComponent as FavoritesIcon} from '../../styles/img/favorites.svg'
import {useContext} from 'react'
import {AppContext} from '../../stores/Store'
import classNames from 'classnames'
import React from 'react'
import {IContext} from '../../interfaces/interfaces'
import {observer} from 'mobx-react'

export const Card = observer(() => {
  const {
    card,
    setCard,
    toggleFavorites,
    UIStore,
  }: IContext = useContext(AppContext)

  const handleAddToFavorites = () => {
    toggleFavorites(card)
  }

  const likeStyle = classNames(
    S.btn__div,
    card?.inFavorites ? S.active : S.inactive,
  )

  /**
   * при добавлении карточки в стейт в моб версии она будет открываться, и на ней дополнительно рендерится кнопка с setCard(null)
   */

  return (
    card && (
      <div className={S.wrapper}>
        <section className={S.section}>
          <div className={S.container}>
            <div className={S.content}>
              <div className={S.image}>
                <img src={card.avatarUrl} />
              </div>
              <div className={S.inner}>
                {UIStore.mobile && (
                  <button
                    className={S.back}
                    onClick={() => setCard(null)}>
                    &#8592;Вернуться
                  </button>
                )}
                <h1 className={S.title}>{card.login}</h1>
                <p className={S.description}>
                  {card.description}
                </p>
                {card.additionalData?.name && (
                  <p className={S.description}>
                    Имя: {card.additionalData.name}
                  </p>
                )}
                {card.additionalData?.htmlUrl && (
                  <p className={S.description}>
                    <a
                      className={S.back}
                      href={card.additionalData.htmlUrl}>
                      Страница на github
                    </a>
                  </p>
                )}
                {card.additionalData?.blog && (
                  <p className={S.description}>
                    <a
                      className={S.back}
                      href={card.additionalData.blog}>
                      Блог
                    </a>
                  </p>
                )}
                {card.additionalData?.followers && (
                  <p className={S.description}>
                    Подписчиков:{' '}
                    {card.additionalData.followers}
                  </p>
                )}
                {card.additionalData?.following && (
                  <p className={S.description}>
                    Подписан:{' '}
                    {card.additionalData.following}
                  </p>
                )}
                {card.additionalData?.location && (
                  <p className={S.description}>
                    Расположение:{' '}
                    {card.additionalData.location}
                  </p>
                )}
                {card.additionalData?.publicRepos && (
                  <p className={S.description}>
                    Публичных репозиториев:{' '}
                    {card.additionalData.publicRepos}
                  </p>
                )}
              </div>
              <div className={likeStyle}>
                <button>
                  <div
                    className={S.icon}
                    onClick={() => handleAddToFavorites()}>
                    <FavoritesIcon />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  )
})
