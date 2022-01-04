import React, { FC, useEffect, useRef } from 'react'
import { ImgWrapper, Img, Button } from './styled'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

type AppProps = {
  id?: string,
  likes?: number,
  src?: string
}

export const PhotoCard: FC<AppProps> = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref: any = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      console.log(entries)
    })
    observer.observe(ref.current)
  }, [ref])

  return (
    <article ref={ref}>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size="32px" /> {likes} likes!
      </Button>
    </article>
  )
}
