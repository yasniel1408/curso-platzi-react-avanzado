import { FC } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styled';

type AppProps = {
  likes?: number;
  handleClick?: any;
  liked?: boolean;
};

export const FavButton: FC<AppProps> = ({ likes, handleClick, liked }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={() => handleClick()}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
};
