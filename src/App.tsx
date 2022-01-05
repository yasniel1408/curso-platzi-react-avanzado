import { FC } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { ListOfCategory } from 'components/ListOfCategory';
import { ListOfPhotoCards } from 'components/ListOfPhotoCards';
import { Logo } from 'components/Logo';

export const App: FC = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategory />
    <ListOfPhotoCards />
  </div>
);
