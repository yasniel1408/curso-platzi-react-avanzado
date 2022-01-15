import { PhotoCard } from 'components/PhotoCard';
import { FC } from 'react';

type AppProps = {
  photos: [];
  favs?: boolean;
};

export const ListOfPhotoCards: FC<AppProps> = ({ photos }) => {
  return (
    <ul>
      {photos?.map((photo: any) => (
        <PhotoCard key={photo?.id} {...photo} />
      ))}
    </ul>
  );
};
