import { gql, useMutation } from '@apollo/client';
import { FavButton } from 'components/FavButton';
import { FC } from 'react';

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
  like: boolean;
  likes?: number;
  id?: number;
  handleLike?: any;
};

export const ToggleLikeMutationContainer: FC<AppProps> = ({ id, like, likes, handleLike }) => {
  const [likeAnonymousPhoto, { loading, error }] = useMutation(LIKE_PHOTO, {
    variables: { input: { id } },
  });

  const handleClick = () => {
    !like && likeAnonymousPhoto();
    handleLike();
  };

  if (error) return <p>Error! {JSON.stringify(error?.networkError)}</p>;

  return <FavButton like={like} likes={likes} handleClick={handleClick} loading={loading} />;
};
