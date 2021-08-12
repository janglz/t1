import React from 'react'
import S from './SearchPanel.module.css'
import filterIcon from '../../styles/img/filter.svg'
import searchIcon from '../../styles/img/search.svg'
import { useContext, useState } from 'react'
import { AppContext } from '../../stores/Store'
import { List } from '../List/List'
import { Iitem } from '../../interfaces/interfaces'


export function SearchPanel (): JSX.Element | null  {
  const { page, organizations, users, favorites, mobile, card } = useContext(AppContext)
  let list: Iitem[] | null = null;
  const [searchQuery, setSearchQuery] = useState('')
  
  const selectItems = (page: string | null): Iitem[]| null => {
    switch (page) {
      case 'users': 
        return users
      case 'organizations':
        return organizations
      case 'favorites':
        if (favorites) return searchQuery ?
        favorites
        .filter((el: Iitem) => 
          el?.login?.toLowerCase().includes(searchQuery.toLowerCase()) || 
          el?.description?.toLowerCase().includes(searchQuery.toLowerCase())) :
        favorites
        return favorites
      default: 
        return null
    }
  }
  list = selectItems(page)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  // const whyrender = (!mobile && page) || (page && mobile && (!card && !showMenu))
  const renderIf = ( !!page && !mobile|| (!card && mobile && page) ) 

  return renderIf ? (
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
        <div className={S.content}>
          {/* <Pagination /> */}
          <List filtered={list} />
        </div>
      </nav>
    </aside>
  ) : null
}