import { FC } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styled';

type AppProps = {
  like?: any;
  likes?: number;
  handleClick?: any;
  loading: boolean;
};

export const FavButton: FC<AppProps> = ({ like, likes, handleClick, loading }: AppProps) => {
  const Icon = like ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={() => handleClick()}>
      {loading ? (
        '...'
      ) : (
        <>
          <Icon size="32px" /> {likes} likes!
        </>
      )}
    </Button>
  );
};
