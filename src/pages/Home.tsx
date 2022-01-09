import { RouteComponentProps } from '@reach/router';
import { ListOfCategoryContainer } from 'containers/ListOfCategoryContainer';
import { ListOfPhotoCardsContainer } from 'containers/ListOfPhotoCardsContainer';
import { FC } from 'react';

type AppProps = {
  categoryId?: number;
} & RouteComponentProps;

export const Home: FC<AppProps> = ({ categoryId }: AppProps) => (
  <>
    <ListOfCategoryContainer />
    <ListOfPhotoCardsContainer categoryId={categoryId} />
  </>
);
