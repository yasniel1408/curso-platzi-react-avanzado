import { useLocalStorage } from 'hooks/useLocalStorage';
import { FC, useEffect, useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import { ImgWrapper, Img, Button, Article } from './styled';

const DEFAULT_IMAGE =
  // eslint-disable-next-line max-len
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

type AppProps = {
  id?: number;
  likes?: number;
  src?: string;
};

export const PhotoCard: FC<AppProps> = ({ id, likes = 0, src = DEFAULT_IMAGE }: AppProps) => {
  const { ref, inView } = useInView({
    fallbackInView: true,
  });

  const { getPersistData, savePersistData, data, loading, error } = useLocalStorage({
    key: `like-${id}`,
  });

  const [like, setLike] = useState<Boolean | null>(data);

  useEffect(() => {
    getPersistData();
  }, [getPersistData]);

  useEffect(() => {
    setLike(data);
  }, [data]);

  const Icon = like ? MdFavorite : MdFavoriteBorder;

  const handleLike = () => {
    const value: boolean = !like;
    setLike(value);
    savePersistData({ data: value });
  };

  return (
    <Article ref={ref}>
      {inView && (
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
