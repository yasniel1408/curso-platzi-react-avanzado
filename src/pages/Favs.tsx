import { RouteComponentProps } from '@reach/router';
import { Layout } from 'components/Layout';
import { ListOfFavoritesContainer } from 'containers/ListOfFavoritesContainer';
import { FC } from 'react';

const Favs: FC<RouteComponentProps> = () => (
  <Layout title="Tus favoritos" subtitle="Aquí puedes encontrar tus favoritos">
    <ListOfFavoritesContainer />
  </Layout>
);

export default Favs;
