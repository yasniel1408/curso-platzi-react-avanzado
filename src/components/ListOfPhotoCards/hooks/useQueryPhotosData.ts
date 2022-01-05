import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { getPhotos } from './gql/getPhotos';

export const useQueryPhotosData = ({ categoryId = '2' }) => {
  const [loadGreeting, { called, loading, data }] = useLazyQuery(getPhotos, {
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
