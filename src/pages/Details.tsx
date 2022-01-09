import { RouteComponentProps } from '@reach/router';
import { PhotoCardWithQuery } from 'containers/PhotoCardWithQueryContainer';
import { FC } from 'react';

type AppProps = {
  categoryId?: number;
} & RouteComponentProps;

export const Details: FC<AppProps> = ({ categoryId }: AppProps) => (
  <PhotoCardWithQuery id={categoryId} />
);
