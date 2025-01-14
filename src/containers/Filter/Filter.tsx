import React from 'react'
import S from './Filter.module.css'
import {useContext} from 'react'
import {AppContext} from '../../stores/Store'
import {observer} from 'mobx-react'
import cn from 'classnames'

export const Filter = observer(() => {
  const {setFilteredBy, filteredBy, UIStore} =
    useContext(AppContext)

  return (
    <div className={cn(`${S.container} ${S.opening}`)}>
      <h5>Выберите категорию:</h5>
      <label>
        <input
          type="radio"
          onChange={() => {
            UIStore.setFilter(false)
            setFilteredBy('users')
          }}
          checked={filteredBy === 'users'}
        />
        пользователи
      </label>
      <label>
        <input
          type="radio"
          onChange={() => {
            UIStore.setFilter(false)
            setFilteredBy('organizations')
          }}
          checked={filteredBy === 'organizations'}
        />
        организации
      </label>
      <label>
        <input
          type="radio"
          onChange={() => {
            UIStore.setFilter(false)
            setFilteredBy('')
          }}
          checked={filteredBy === ''}
        />
        все
      </label>
    </div>
  )
})
