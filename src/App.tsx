import React, { FC } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategory />
      <ListOfPhotoCards />
    </div>
  )
}

export default App
