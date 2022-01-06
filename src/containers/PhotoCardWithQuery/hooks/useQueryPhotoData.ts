import { gql, useQuery } from '@apollo/client';

export const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      likes
      liked
      src
      categoryId
      userId
    }
  }
`;

export const useQueryPhotoData = ({ id }: { id: number }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id },
  });

  return {
    loading,
    data,
    error,
  };
};
