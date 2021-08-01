import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App/App'
import { $el } from './constants/api'

import styles from './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  $el,
)