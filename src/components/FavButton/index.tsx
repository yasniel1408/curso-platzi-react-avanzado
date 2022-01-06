import { useMutation, gql } from '@apollo/client';
import { FC } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styled';

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

type AppProps = {
  id?: number;
  like?: any;
  likes?: number;
  handleLike?: any;
};

export const FavButton: FC<AppProps> = ({ id, like, likes, handleLike }: AppProps) => {
  const Icon = like ? MdFavorite : MdFavoriteBorder;

  const [likeAnonymousPhoto, { data, loading, error }] = useMutation(LIKE_PHOTO, {
    variables: { input: { id } },
  });

  const handleClick = () => {
    !like && likeAnonymousPhoto();
    handleLike();
  };

  return (
    <Button onClick={() => handleClick()}>
      {JSON.stringify(data)}
      {error}
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
