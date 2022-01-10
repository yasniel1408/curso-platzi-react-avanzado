import { Logo } from 'components/Logo';
import { Home } from 'pages/Home';
import { FC } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Router } from '@reach/router';
import { Details } from 'pages/Details';
import { NavBar } from 'components/NavBar';
import { Favs } from 'pages/Favs';
import { User } from 'pages/User';
import { Login } from 'pages/Login';
import { useAuth } from 'context/hooks/useAuth';

export const App: FC = () => {
  const value: any = useAuth();

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pets/:categoryId" />
        <Details path="/detail/:categoryId" />
      </Router>
      {value.isAuth ? (
        <Router>
          <Favs path="/favs" />
          <User path="/user" />
        </Router>
      ) : (
        <Router>
          <Login path="/favs" />
          <Login path="/user" />
        </Router>
      )}
      <NavBar />
    </div>
  );
};
