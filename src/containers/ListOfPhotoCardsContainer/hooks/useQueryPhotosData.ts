import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';

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
  const [loadGreeting, { called, loading, data }] = useLazyQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);

  return {
    loadGreeting,
    loading,
    called,
    data,
  };
};
