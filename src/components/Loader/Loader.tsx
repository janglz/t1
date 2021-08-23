import React from 'react'
import S from '../Loader/Loader.module.css'

export const Loader = (): JSX.Element => {
  return (
    <div className={S.loader}>
      <div className={S.bounce1}></div>
      <div className={S.bounce2}></div>
      <div className={S.bounce3}></div>
    </div>
  )
}
