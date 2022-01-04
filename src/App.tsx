import React, { FC } from 'react'
import { GlobalStyle } from './GlobalStyles'
import { ListOfCategory } from './components/ListOfCategory'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategory />
      <ListOfPhotoCards />
    </div>
  )
}

export default App
