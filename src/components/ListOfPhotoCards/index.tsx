import { PhotoCard } from 'components/PhotoCard';
import { useQueryPhotosData } from './hooks/useQueryPhotosData';

export function ListOfPhotoCards() {
  const { loading, photos } = useQueryPhotosData({});

  if (loading) return <p>Loading ...</p>;

  return (
    <ul>
      {photos.map((photo: any) => (
        <PhotoCard key={photo?.id} {...photo} />
      ))}
    </ul>
  );
}
