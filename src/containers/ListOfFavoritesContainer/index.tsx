import { ListOfPhotoCards } from 'components/ListOfPhotoCards';
import { FC } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const ListOfFavoritesContainer: FC = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return <ListOfPhotoCards photos={data?.favs} />;
};
