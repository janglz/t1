import { React } from 'react'
import logo from '../../styles/img/logo.svg'
import users from '../../db/users.json'
import organizations from '../../db/organizations.json'

function App() {
  console.log(users, organizations)

  return (
    <>
      <h1>App</h1>
      <img src={logo} width="200px" />
    </>
  )
}

export default App
