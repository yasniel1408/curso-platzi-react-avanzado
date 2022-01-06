import { ListOfPhotoCards } from 'components/ListOfPhotoCards';
import { FC, useState } from 'react';
import { useQueryPhotosData } from './hooks/useQueryPhotosData';

export const ListOfPhotoCardsContainer: FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [categoryId, setCategoryId] = useState(NaN);

  const { loading, data } = useQueryPhotosData({ categoryId });

  if (loading) return <p>Loading ...</p>;

  return <ListOfPhotoCards photos={data?.photos} />;
};
