import { useLocalStorage } from 'hooks/useLocalStorage';
import { FC, useEffect, useRef, useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { ImgWrapper, Img, Button, Article } from './styled';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

type AppProps = {
  id?: number;
  likes?: number;
  src?: string;
};

export const PhotoCard: FC<AppProps> = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref: any = useRef(null);

  const { getPersistData, savePersistData, data, loading, error } = useLocalStorage({
    key: `like-${id}`,
  });

  const [show, setShow] = useState(false);
  const [like, setLike] = useState<Boolean | null>(data);

  useEffect(() => {
    getPersistData();
  }, [getPersistData]);

  useEffect(() => {
    setLike(data);
  }, [data, setLike]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) setShow(true);
    });
    observer.observe(ref.current);
  }, [setShow]);

  const Icon = like ? MdFavorite : MdFavoriteBorder;

  const handleLike = () => {
    const value: boolean = !like;
    setLike(value);
    savePersistData({ data: value });
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => handleLike()}>
            {error}
            {loading ? (
              '...'
            ) : (
              <>
                <Icon size="32px" /> {likes} likes!
              </>
            )}
          </Button>
        </>
      )}
    </Article>
  );
};
