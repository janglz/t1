import S from './Card.module.css'
import { ReactComponent as FavoritesIcon } from '../../styles/img/favorites.svg'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import { useLocalStorage } from '../../api/useLocalStorage'
import classNames from 'classnames'
import React from 'react'
import { IContext, Iitem } from '../../interfaces/interfaces'

export function Card(): JSX.Element | null {
  const { card, setCard, users, setUsers, organizations, setOrganizations, favorites, setFavorites, mobile }: IContext = useContext(AppContext)
  // const favoritesPage = page === 'favorites';
  // const usersPage = page === 'users';
  // const organizationsPage = page === 'organizations';

  const [, setLocalFavorites] = useLocalStorage('favorites', favorites)
  const [, setLocalUsers] = useLocalStorage('users', users)
  const [, setLocalOrganizations] = useLocalStorage('organizations', organizations)

  /**
   * 
   * по сути, ниже идет набор диспатчеров, которые впоследствии надо убрать отсюда в стор 
   * 
   */

  const getNewFavorites = () => {
    if (!favorites) return  card? [{...card}] : favorites

    if (card) return favorites && favorites.some((el: Iitem) => el.login === card?.login) ?
      favorites.filter((el: Iitem) => el.login !== card?.login) :
      [...favorites, card] 
      
    return null
  }
   
  const getNewArr = (arr: Iitem[]|null) => {
    if (!arr) return
    const changeElFavorites = (el: Iitem) => el.login === card?.login ? 
      { ...el, inFavorites: !el.inFavorites} : 
      el;
    return arr.map(changeElFavorites)
  }

  const handleAddToFavorites = () => {
    const newCard = card ? {...card, inFavorites: !card?.inFavorites} : null;
    setCard(newCard)
    if (card?.type === 'user') {
      const newUsers = getNewArr(users) || users
      setUsers(newUsers)
      setLocalUsers(newUsers)
    }
    if (card?.type === 'organization') {
      const newOrgs = getNewArr(organizations) || organizations
      setOrganizations(newOrgs)
      setLocalOrganizations(newOrgs)
    }
    const newFav = getNewFavorites()
    //потом перенести подальше, чтобы не каждый рендер выполнялся map
    if (newFav) 
      newFav.map((el) => el !== null ? el.inFavorites = true : el) 
    //
    setFavorites(newFav)   
    setLocalFavorites(newFav) 
  }
    
  const likeStyle = classNames(S.btn__div, card?.inFavorites ? S.red : S.black)

  /**
   * при добавлении карточки в стейт в моб версии она будет открываться, и на ней дополнительно рендерится кнопка с setCard(null)
   */

  return card && (
    <section className={S.section}>
      <div className={S.container}>
        <div className={S.content}>
          <div className={S.image}>
            <img src={card.avatarUrl} />
          </div>
          <div className={S.content__inner}>
            {mobile && <button className={S.back} onClick={()=> setCard(null) }>	
              &#129040;Вернуться
            </button>}
            <h1 className={S.content__title}>{card.login}</h1>
            <p className={S.content__description}>{card.description}</p>
            {card.orgaznizationsUrl && <p className={S.content__description}>Состоит в организациях:</p>}
            {card.orgaznizationsUrl && <p className={S.content__description}>{card.orgaznizationsUrl}</p>}
          </div>
          <div className={ likeStyle }>
            <button>
              <div className={S.icon} onClick={() => handleAddToFavorites()}>
              <FavoritesIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}