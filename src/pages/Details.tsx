import { RouteComponentProps } from '@reach/router';
import { Layout } from 'components/Layout';
import { PhotoCardWithQuery } from 'containers/PhotoCardWithQueryContainer';
import { FC } from 'react';

type AppProps = {
  categoryId?: number;
} & RouteComponentProps;

export const Details: FC<AppProps> = ({ categoryId }: AppProps) => (
  <Layout title={`Fotografía ${categoryId}`}>
    <PhotoCardWithQuery id={categoryId} />
  </Layout>
);
