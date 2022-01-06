import { FC } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styled';

type AppProps = {
  like?: any;
  likes?: number;
  handleLike?: any;
};

export const FavButton: FC<AppProps> = ({ like, likes, handleLike }: AppProps) => {
  const Icon = like ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={() => handleLike()}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
};
