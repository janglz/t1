import React from 'react'
import { AppContext, useStore, Store } from '../../stores/Store'
import { Header } from '../../components/Header/Header'
import { Menu } from '../../components/Menu/Menu'
import { SearchPanel } from '../../components/SearchPanel/SearchPanel'
import { Card } from '../../components/Card/Card'


import S from './App.module.css'
import { IContext } from '../../interfaces/interfaces'

let store: IContext;

const App = () => {
  const root = store ?? new Store(null, null, null, null, null, true)
  console.log(root)
  return (
    <AppContext.Provider value={root}>
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
};

export default App
