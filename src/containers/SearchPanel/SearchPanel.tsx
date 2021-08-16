import React from 'react'
import S from './SearchPanel.module.css'
import filterIcon from '../../styles/img/filter.svg'
import searchIcon from '../../styles/img/search.svg'
import { useContext, useState } from 'react'
import { AppContext } from '../../stores/Store'
import { List } from '../../components/List/List'
import { Iitem } from '../../interfaces/interfaces'
import { observer } from 'mobx-react'

export const SearchPanel = observer(()=> {
  const { UIStore, organizations, users, searchFavorites,  card, searchQuery, setSearchQuery } = useContext(AppContext)
  let list: Iitem[] | null = null;
  // const [searchQuery, setSearchQuery] = useState('')
  
  const selectItems = (page: string | null): Iitem[]| null => {
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
  list = selectItems(UIStore.page)

  const handleSearch = (query: string) => {
    setSearchQuery(query || '')
  }

  const renderIf = ( !!UIStore.page && !UIStore.mobile|| (!card && UIStore.mobile && UIStore.page) ) 

  return renderIf ? (
    <aside className={S.menu}>
      {UIStore.page === 'favorites' &&
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
        <div className={S.content}>
          {/* <Pagination /> */}
          <List filtered={list} />
        </div>
      </nav>
    </aside>
  ) : null
})