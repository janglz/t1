import { React } from 'react'
// import users from '../../db/users.json'
// import organizations from '../../db/organizations.json'
import { AppContext, useStore } from '../../stores/Store'
import { Header } from '../../components/Header/Header'
import { Favorites } from '../../components/Favorites/Favorites'
import { SearchPanel } from '../../components/SearchPanel/SearchPanel'
import { Card } from '../../components/Card/Card'

import S from './App.module.css'


function App() {
  const store = useStore()
  
  return (
    <AppContext.Provider value={store}>
      {/* <AppContext.Consumer >
        {() => ( */}
          <>
            <div className={S.wrapper}>
              <Header />
            </div>
            <div className={S.wrapper}>
              <main className={S.main}>
                <Favorites />
                <SearchPanel />
                <Card />
              </main>
            </div>
          </>
      {/* //   )}
      // </AppContext.Consumer> */}
    </AppContext.Provider>
  )
}

export default App
