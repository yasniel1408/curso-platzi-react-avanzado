import { PhotoCard } from 'components/PhotoCard';
import { FC } from 'react';

type AppProps = {
  data?: any;
};

export const PhotoCardDetail: FC<AppProps> = ({ data }: AppProps) => {
  return (
    <div>
      <PhotoCard {...data} />
    </div>
  );
};
