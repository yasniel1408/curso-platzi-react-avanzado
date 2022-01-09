import { Logo } from 'components/Logo';
import { PhotoCardWithQuery } from 'containers/PhotoCardWithQueryContainer';
import { Home } from 'pages/Home';
import { FC } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Router } from '@reach/router';
import { Details } from 'pages/Details';

export const App: FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = Number(urlParams.get('detail'));

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {categoryId ? (
        <PhotoCardWithQuery id={categoryId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pets/:categoryId" />
          <Details path="/detail/:categoryId" />
        </Router>
      )}
    </div>
  );
};
