import { ListOfPhotoCards } from 'components/ListOfPhotoCards';
import { FC, useState } from 'react';
import { useQueryPhotosData } from './hooks/useQueryPhotosData';

export const ListOfPhotoCardsContainer: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [categoryId, setCategoryId] = useState(NaN);

  const { loading, error, data } = useQueryPhotosData({ categoryId });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return <ListOfPhotoCards photos={data?.photos} />;
};
