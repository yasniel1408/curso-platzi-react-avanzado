import { Logo } from 'components/Logo';
import { Home } from 'pages/Home';
import { FC } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Router } from '@reach/router';
import { Details } from 'pages/Details';
import { NavBar } from 'components/NavBar';

export const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pets/:categoryId" />
        <Details path="/detail/:categoryId" />
      </Router>
      <NavBar />
    </div>
  );
};
