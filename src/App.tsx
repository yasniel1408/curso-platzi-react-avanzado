import React, { FC } from 'react'
import { GlobalStyle } from './GlobalStyles'
import { ListOfCategory } from './components/ListOfCategory'

const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategory />
      <h1>HOLA MUNDO</h1>
    </div>
  )
}

export default App
