import React, {useEffect, useRef} from 'react'
import S from './SearchPanel.module.css'
import filterIcon from '../../styles/img/filter.svg'
import searchIcon from '../../styles/img/search.svg'
import {useContext} from 'react'
import {AppContext} from '../../stores/Store'
import {List} from '../../components/List/List'
import {Iitem} from '../../interfaces/interfaces'
import {observer} from 'mobx-react'
import {useIntersectionObserver} from '../../api/useIntersectionObserver'
import {Filter} from '../Filter/Filter'

export const SearchPanel = observer(() => {
  const {
    UIStore,
    organizations,
    users,
    searchFavorites,
    card,
    searchQuery,
    setSearchQuery,
    updateData,
    apiQuery,
    setApiQuery,
  } = useContext(AppContext)

  const scrollRef = useRef<HTMLDivElement>(null)
  const {
    createScrollObserver,
    isIntersecting,
    setisIntersecting,
  } = useIntersectionObserver(scrollRef)

  const scrollObserver = createScrollObserver()

  useEffect(() => {
    if (scrollRef?.current) {
      scrollObserver.observe(scrollRef.current)
    }
  }, [UIStore.page])

  useEffect(() => {
    if (
      isIntersecting &&
      UIStore.page !== null &&
      UIStore.page !== 'favorites'
    )
      setApiQuery(UIStore.page)

    setisIntersecting(false)
    if (UIStore.page) updateData(UIStore.page, apiQuery)
  }, [isIntersecting])

  const selectItems = (
    page: string | null,
  ): Iitem[] | null => {
    switch (page) {
      case 'users':
        return users
      case 'organizations':
        return organizations
      case 'favorites':
        return searchFavorites
      default:
        return null
    }
  }
  const list = selectItems(UIStore.page)

  const handleSearch = (query: string) => {
    setSearchQuery(query || '')
  }

  const renderIf =
    (!!UIStore.page && !UIStore.mobile) ||
    (!card && UIStore.mobile && UIStore.page)

  return renderIf ? (
    <aside className={S.menu}>
      {UIStore.page === 'favorites' && (
        <div>
          <div className={S.search}>
            <span className={S.searchIcon}>
              <img
                src={searchIcon}
                id="search"
                className={S.searchIcon}></img>
            </span>
            <form
              className={S.form}
              onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                id="search"
                placeholder="Найти..."
                value={searchQuery}
                onChange={(e) =>
                  handleSearch(e.target.value)
                }
                autoFocus
                autoComplete="off"
              />
            </form>
            <span
              className={S.filter}
              onClick={() =>
                UIStore.setFilter(!UIStore.filter)
              }>
              <img
                src={filterIcon}
                id="filter"
                className={S.filterIcon}></img>
            </span>
          </div>
          {UIStore.filter ? <Filter /> : null}
        </div>
      )}
      <nav className={S.navbar}>
        <div className={S.content}>
          <List filtered={list} />
          {UIStore.page !== 'favorites' && (
            <div ref={scrollRef} className={S.trigger} />
          )}
        </div>
      </nav>
    </aside>
  ) : null
})
