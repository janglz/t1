import { React, useEffect } from 'react'
import { AppContext, useStore } from '../../stores/Store'
import { Header } from '../../components/Header/Header'
import { Menu } from '../../components/Menu/Menu'
import { SearchPanel } from '../../components/SearchPanel/SearchPanel'
import { Card } from '../../components/Card/Card'

import S from './App.module.css'


function App() {
  const store = useStore();
  
  return (
    <AppContext.Provider value={store}>
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
    </AppContext.Provider>
  )
}

export default App
