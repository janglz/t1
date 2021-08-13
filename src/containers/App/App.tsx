import React from 'react'
import { AppContext, Store } from '../../stores/Store'
import { Header } from '../../components/Header/Header'
import { Menu } from '../../components/Menu/Menu'
import { SearchPanel } from '../../components/SearchPanel/SearchPanel'
import { Card } from '../../components/Card/Card'

import S from './App.module.css'

  const App = (): JSX.Element => {
  const store = new Store(null, null, null, null, null, true, window.innerWidth < 900)
  return (
    <AppContext.Provider value={store}>
      <AppContext.Consumer>{()=>(
      <div>
      <div className={S.wrapper}>
        <Header />
      </div>
      <div className={S.wrapper}>
        <main className={S.main}>
          <Menu />
          <SearchPanel />
          <Card />
        </main>
      </div>
      </div>
      )}</AppContext.Consumer>
    </AppContext.Provider>
  )
}

export default App
