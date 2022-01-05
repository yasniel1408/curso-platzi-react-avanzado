import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_PHOTOS } from './gql/getPhotos';

export const useQueryPhotosData = ({ categoryId = '2' }) => {
  const [loadGreeting, { called, loading, data }] = useLazyQuery(GET_PHOTOS, {
    variables: { categoryId },
  });

  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);

  return {
    loading: called && loading,
    photos: data?.photos,
  };
};
