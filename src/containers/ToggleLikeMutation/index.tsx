import { gql } from '@apollo/client';
import { FC } from 'react';
import { Mutation } from 'react-apollo';

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
  children: any;
};

export const ToggleLikeMutationContainer: FC<AppProps> = ({ children }: AppProps) => {
  return <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>;
};
