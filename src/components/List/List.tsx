import React from 'react'
import S from './List.module.css'
import { useContext } from 'react'
import { AppContext } from '../../stores/Store'
import { ReactComponent as FavoritesIcon } from '../../styles/img/favorites.svg'
import { Iitem } from '../../interfaces/interfaces'

/**
 * todo
 * Убрать проптайп ANY
 */

export function List({ filtered }: { filtered: Iitem[] | null }): JSX.Element | null {
  const { setCard } = useContext(AppContext)
  // console.log('filtered',filtered)
  const mapped = filtered === null ? null : filtered.map((el: Iitem):JSX.Element => (
    <li className={S.contentItem} key={el.login} onClick={() => setCard(el)}>
      <div className={S.itemImg}><img src={el.avatarUrl} /></div>
      <div className={S.value}>
        <h4 className="main-cotent__item-title">{el.login}</h4>
        <p className="main-cotent__item-text">{el.type}</p>
      </div>
      <span className={S.icon}>
        {el.inFavorites && <FavoritesIcon/>}
      </span>
    </li>
  ))
  return <ul>{mapped}</ul>
  
  // return filtered && filtered.length > 0 ? mapped : null
}