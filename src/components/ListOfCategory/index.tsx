import React, { FC, useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styled'

export const ListOfCategory: FC = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onload = async () => {
      const res = await fetch('https://petgram-server-livid.vercel.app/categories')
      const json = await res.json()
      setCategories(json)
    }
    onload()
  }, [])

  useEffect(
    function () {
      const onScroll = () => {
        const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  const renderList = (fixed: any = false) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category: any) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
