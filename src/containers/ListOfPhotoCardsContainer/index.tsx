import { ListOfPhotoCards } from 'components/ListOfPhotoCards';
import { FC } from 'react';
import { useQueryPhotosData } from './hooks/useQueryPhotosData';

type AppProps = {
  categoryId?: number;
};

export const ListOfPhotoCardsContainer: FC<AppProps> = ({ categoryId }: AppProps) => {
  const { loading, error, data } = useQueryPhotosData({
    categoryId: categoryId || NaN,
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return <ListOfPhotoCards photos={data?.photos} />;
};
