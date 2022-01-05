import { PhotoCard } from 'components/PhotoCard';
import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';

const withPhotos = gql`
  query getPhotos {
    photos {
      id
    }
  }
`;

export function ListOfPhotoCards() {
  const [loadGreeting, { called, loading, data }] = useLazyQuery(withPhotos, {
    variables: { language: 'english' },
  });

  useEffect(() => {
    loadGreeting();
  }, [loadGreeting]);

  if (called && loading) return <p>Loading ...</p>;

  return (
    <ul>
      {data?.photos.map(({ id }: { id: string }) => (
        <PhotoCard key={id} id={id} />
      ))}
    </ul>
  );
}
