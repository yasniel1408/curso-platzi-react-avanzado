import { PhotoCard } from 'components/PhotoCard';
import { FC } from 'react';

type AppProps = {
  photos: [];
};

export const ListOfPhotoCards: FC<AppProps> = ({ photos }: AppProps) => {
  return (
    <ul>
      {photos?.map((photo: any) => (
        <PhotoCard key={photo?.id} {...photo} />
      ))}
    </ul>
  );
};
