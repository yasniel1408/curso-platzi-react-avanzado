import React, { FC } from 'react'
import { Category } from '../Category'
import { Item, List } from './styled'
import { categories } from '../../../api/db.json'

export const ListOfCategory: FC = () => {
  return (
    <List>
      {categories.map((category: any) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
