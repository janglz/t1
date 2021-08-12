import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App/App'
import { $el } from './constants/api'

// import styles from './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  $el,
)


window.addEventListener('load', async () => {
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./todo-courses/serviceWorker.js', {scope: './todo-courses/'})
  .then((reg) => {
    // регистрация сработала
    // console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    // регистрация прошла неудачно
    // console.log('Registration failed with ' + error);
  });
}
})
