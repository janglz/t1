import S from './Card.module.css'
import {ReactComponent as FavoritesIcon} from '../../styles/img/favorites.svg'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../stores/Store'
import { useLocalStorage } from '../../api/useLocalStorage'
import classNames from 'classnames'

export function Card() {
  const { card, setCard, users, setUsers, organizations, setOrganizations, page, favorites, setFavorites } = useContext(AppContext)
  const favoritesPage = page === 'favorites';
  const usersPage = page === 'users';
  const organizationsPage = page === 'organizations';

  const [localFavorites, setLocalFavorites] = useLocalStorage('favorites', favorites)

  /**
   * 
   * по сути, ниже идет набор диспатчеров, которые впоследствии надо убрать отсюда в стор 
   * 
   */

  const getNewFavorites = () => {
    if (!favorites) return  [{...card}]
    return favorites.some(el => el.login === card.login) ?
      favorites.filter(el => el.login !== card.login) :
      [...favorites, card] 
  }
   
  const getNewArr = (arr) => {
    const changeElFavorites = el => el.login === card.login ? 
      { ...el, inFavorites: !el.inFavorites} : 
      el;
    return arr.map(changeElFavorites)
  }

  const handleAddToFavorites = () => {
    const newCard = {...card, inFavorites: !card.inFavorites};
    setCard(newCard)
    if (card.type === 'user') {
      const newUsers = getNewArr(users) || users
      setUsers(newUsers)
    }
    if (card.type === 'organization') {
      const newOrgs = getNewArr(organizations) || organizations
      setOrganizations(newOrgs)
    }
    const newFav = getNewFavorites()
    //потом перенести подальше, чтобы не каждый рендер выполнялся map
    newFav.map(el => el.inFavorites = true) 
    //
    setFavorites(newFav)    
  }
    
  const styles = classNames.bind(S)

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
            {card.orgaznizationsUrl && <p className={S.content__description}>Состоит в организациях:</p>}
            {card.orgaznizationsUrl && <p className={S.content__description}>{card.orgaznizationsUrl}</p>}
          </div>
          <div className={ styles(S.btn, card.inFavorites && S.red) }>
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