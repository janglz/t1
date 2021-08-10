import S from './SearchPanel.module.css'
import filterIcon from '../../styles/img/filter.svg'
import searchIcon from '../../styles/img/search.svg'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../stores/Store'
import { List } from '../List/List'
import { useLocalStorage } from '../../api/useLocalStorage'

export function SearchPanel () {
  const { page, organizations, users, favorites, setCard } = useContext(AppContext)
  let list = [];
  const [localFavorites, setLocalFavorites] = useLocalStorage('favorites', favorites);
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState()

  useEffect(()=>{
    setSearchResult(list)
  }, [list])

  const selectItems = (page) => {
    switch (page) {
      case 'users': 
        return users
      case 'organizations':
        return organizations
      case 'favorites':
        return favorites
      default: 
        return 
    }
  }
  list = selectItems(page)


  const handleSearch = (query) => {
    if (!query) return;
    
  }

  return page && (
    <aside className={S.menu}>
      {page === 'favorites' &&
      <div className={S.search}>
        <span className={S.searchIcon}>
          <img src={searchIcon} id="search" className={S.searchIcon}></img>
        </span>
        <form className={S.form} action="#" method="GET" onSubmit={e => e.preventDefault()}>
          <input type="search" id="search" placeholder="Найти..." value={searchQuery} onChange={e => handleSearch(e.target.value)} autoFocus />
        </form>
        <span className={S.filter}>
          <img src={filterIcon} id="filter" className={S.filterIcon}></img>
        </span>
      </div>}
      <nav className={S.navbar}>
        <ul className={S.content}>
          {/* {selectPage()} */}
          <List filtered={searchResult} />
        </ul>
      </nav>
    </aside>
  )
}