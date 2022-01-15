import { PhotoCard } from 'components/PhotoCard';
import { FC } from 'react';

type AppProps = {
  data?: any;
};

export const PhotoCardDetail: FC<AppProps> = ({ data }) => {
  return (
    <div>
      <PhotoCard {...data} />
    </div>
  );
};
