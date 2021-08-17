import React from 'react'
import S from '../Spinner/Spinner.module.css'

export const Spinner = (): JSX.Element => {
  return (
    <div className={S.spinner}>
      <div className={S.bounce1}></div>
      <div className={S.bounce2}></div>
      <div className={S.bounce3}></div>
    </div>
  )
}
