import { FC } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styled';

type AppProps = {
  like?: any;
  likes?: number;
  handleClick?: any;
};

export const FavButton: FC<AppProps> = ({ like, likes, handleClick }) => {
  const Icon = like ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={() => handleClick()}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
};
