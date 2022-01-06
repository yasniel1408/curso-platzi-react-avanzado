import { PhotoCardDetail } from 'components/PhotoCardDetail';
import { FC } from 'react';
import { useQueryPhotoData } from './hooks/useQueryPhotoData';

type AppProps = {
  id?: any;
};

export const PhotoCardWithQuery: FC<AppProps> = ({ id }) => {
  const { loading, error, data } = useQueryPhotoData({ id });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error! {JSON.stringify(error?.networkError)}</p>;

  return <PhotoCardDetail data={data?.photo} />;
};
