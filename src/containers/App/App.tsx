import React from 'react'
import {AppContext, Store} from '../../stores/Store'
import {Header} from '../../components/Header/Header'
import {Menu} from '../Menu/Menu'
import {SearchPanel} from '../SearchPanel/SearchPanel'
import {Card} from '../Card/Card'

import S from './App.module.css'

const App = (): JSX.Element => {
  const store = new Store(
    [],
    [],
    [],
    null,
    '',
    '',
    null,
    '',
  )
  return (
    <AppContext.Provider value={store}>
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
    </AppContext.Provider>
  )
}

export default App
