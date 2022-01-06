import { gql, useQuery } from '@apollo/client';

export const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      likes
      liked
      src
      categoryId
      userId
    }
  }
`;

export const useQueryPhotosData = ({ categoryId }: { categoryId: number }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

  return {
    loading,
    error,
    data,
  };
};
