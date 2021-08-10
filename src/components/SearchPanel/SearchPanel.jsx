import S from './SearchPanel.module.css'
import filterIcon from '../../styles/img/filter.svg'
import searchIcon from '../../styles/img/search.svg'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../stores/Store'
import { List } from '../List/List'
import { useLocalStorage } from '../../api/useLocalStorage'

export function SearchPanel () {
  const { page, organizations, users, favorites, mobile, card } = useContext(AppContext)
  let list = [];
  // const [localFavorites, setLocalFavorites] = useLocalStorage('favorites', favorites);
  const [searchQuery, setSearchQuery] = useState('')

  const selectItems = (page) => {
    switch (page) {
      case 'users': 
        return users
      case 'organizations':
        return organizations
      case 'favorites':
        return searchQuery && favorites ?
        favorites.filter(el => el?.login?.includes(searchQuery) || el?.description?.includes(searchQuery)) :
        favorites
      default: 
        return 
    }
  }
  list = selectItems(page)


  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (!mobile || !card) && (
    <aside className={S.menu}>
      {page === 'favorites' &&
      <div className={S.search}>
        <span className={S.searchIcon}>
          <img src={searchIcon} id="search" className={S.searchIcon}></img>
        </span>
        <form className={S.form} onSubmit={e => e.preventDefault()}>
          <input 
            type="search" 
            id="search" 
            placeholder="Найти..." 
            value={searchQuery} 
            onChange={e => handleSearch(e.target.value)} 
            autoFocus 
            autoComplete="off" 
          />
        </form>
        <span className={S.filter}>
          <img src={filterIcon} id="filter" className={S.filterIcon}></img>
        </span>
      </div>}
      <nav className={S.navbar}>
        <ul className={S.content}>
          {/* <Pagination /> */}
          <List filtered={list} />
        </ul>
      </nav>
    </aside>
  )
}