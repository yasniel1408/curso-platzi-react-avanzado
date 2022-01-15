import { Logo } from 'components/Logo';
import { Home } from 'pages/Home';
import { FC } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Redirect, Router } from '@reach/router';
import { Details } from 'pages/Details';
import { NavBar } from 'components/NavBar';
import { Favs } from 'pages/Favs';
import { User } from 'pages/User';
import { UserAuthentication } from 'pages/UserAuthentication';
import { useAuth } from 'context/hooks/useAuth';
import { NotFound } from 'pages/NotFound';

export const App: FC = () => {
  const value: any = useAuth();

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pets/:categoryId" />
        <Details path="/detail/:categoryId" />
        {!value.isAuth && <UserAuthentication path="/login" />}
        {!value.isAuth && <Redirect from="/favs" to="/login" />}
        {!value.isAuth && <Redirect from="/user" to="/login" />}
        {value.isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </div>
  );
};
