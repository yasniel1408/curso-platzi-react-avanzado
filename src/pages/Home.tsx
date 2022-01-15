import { RouteComponentProps } from '@reach/router';
import { Layout } from 'components/Layout';
import { ListOfCategoryContainer } from 'containers/ListOfCategoryContainer';
import { ListOfPhotoCardsContainer } from 'containers/ListOfPhotoCardsContainer';
import { FC } from 'react';

type AppProps = {
  categoryId?: number;
} & RouteComponentProps;

export const Home: FC<AppProps> = ({ categoryId }: AppProps) => (
  <Layout
    title="Tu app de fotos de mascotas"
    subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
  >
    <ListOfCategoryContainer />
    <ListOfPhotoCardsContainer categoryId={categoryId} />
  </Layout>
);
