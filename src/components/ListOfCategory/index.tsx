import React, { FC } from 'react'
import { Category } from '../Category'
import { Item, List } from './styled'

export const ListOfCategory: FC = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
        <Item key={value}>
          <Category />
        </Item>
      ))}
    </List>
  )
}
