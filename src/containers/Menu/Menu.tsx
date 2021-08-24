import React from 'react'
import S from './Menu.module.css'
import {ReactComponent as FavoritesIcon} from '../../styles/img/favorites.svg'
import {useContext, useEffect, useLayoutEffect} from 'react'
import {AppContext} from '../../stores/Store'
import cn from 'classnames'
import {IContext} from '../../interfaces/interfaces'
import {observer} from 'mobx-react'

export const Menu = observer((): JSX.Element | null => {
  const {UIStore, setCard}: IContext =
    useContext(AppContext)

  useLayoutEffect(() => {
    window.addEventListener('resize', resize)
    return () =>
      window.removeEventListener('resize', resize)
  }, [])

  useEffect(() => {
    UIStore.setShowMenu(true)
  }, [UIStore.mobile])

  /**
   * запуск анимации в моб версии
   *
   */
  useEffect(() => {
    window.requestAnimationFrame(() =>
      UIStore.setAnimation(!!UIStore.showMenu),
    )
  }, [UIStore.showMenu])

  const resize = () =>
    UIStore.setMobile(
      window.innerWidth < 900 ? true : false,
    )

  const handleSetFavorites = () => {
    setCard(null)
    UIStore.setPage('favorites')
  }

  const handleSetOrgs = async () => {
    setCard(null)
    UIStore.setPage('organizations')
  }

  const handleSetUsers = async () => {
    setCard(null)
    UIStore.setPage('users')
  }

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation()
    if (UIStore.mobile) {
      UIStore.setAnimation(false)
      setTimeout(() => {
        UIStore.setShowMenu(false)
      }, 200)
    }
  }

  return UIStore.showMenu ? (
    <div
      className={UIStore.mobile ? S.overlay : undefined}
      onClick={(e) => handleOverlayClick(e)}>
      <aside
        className={cn(
          S.menu,
          UIStore.mobile &&
            `${S.mobile} ${
              UIStore.animation ? S.opening : S.closing
            }`,
        )}>
        <ul className={S.content}>
          <li className={S.list__item}>
            <button
              className={cn(
                S.btn__transparent,
                UIStore.page === 'favorites' && S.selected,
              )}
              onClick={() => handleSetFavorites()}>
              Избранное
              <FavoritesIcon className={S.icon} />
            </button>
          </li>
          <li className={S.list__item}>
            <button
              className={cn(
                S.btn__transparent,
                UIStore.page === 'users' && S.selected,
              )}
              onClick={() => handleSetUsers()}>
              Пользователи
            </button>
          </li>
          <li className={S.list__item}>
            <button
              className={cn(
                S.btn__transparent,
                UIStore.page === 'organizations' &&
                  S.selected,
              )}
              onClick={() => handleSetOrgs()}>
              Организации
            </button>
          </li>
        </ul>
      </aside>
    </div>
  ) : null
})
