import React from 'react'
import S from './List.module.css'
import {useContext} from 'react'
import {AppContext} from '../../stores/Store'
import {ReactComponent as FavoritesIcon} from '../../styles/img/favorites.svg'
import {Iitem} from '../../interfaces/interfaces'
import {Loader} from '../Loader/Loader'

//TODO
// Исправить ширину списка при слишком длинном имени или описании

export function List({
  filtered,
}: {
  filtered: Array<Iitem> | null
}): JSX.Element | null {
  const {setCard, UIStore} = useContext(AppContext)

  const mapped =
    filtered === null
      ? null
      : filtered.map(
          (el: Iitem): JSX.Element => (
            <li
              className={S.contentItem}
              key={el.login}
              onClick={() => setCard(el)}>
              <div className={S.itemImg}>
                <img src={el.avatarUrl} />
              </div>
              <div className={S.value}>
                <h4 className="main-cotent__item-title">
                  {el.login}
                </h4>
                <p className="main-cotent__item-text">
                  {el.type}
                </p>
              </div>
              {UIStore.page !== 'favorites' && (
                <span className={S.icon}>
                  {el.inFavorites && <FavoritesIcon />}
                </span>
              )}
            </li>
          ),
        )
  return (
    <>
      <ul className={S.list}>
        {mapped}
        {UIStore.loading ? <Loader /> : null}
      </ul>
    </>
  )
}
