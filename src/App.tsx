import { Logo } from 'components/Logo';
import { Home } from 'pages/Home';
import { FC } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Router } from '@reach/router';
import { Details } from 'pages/Details';
import { NavBar } from 'components/NavBar';
import { Favs } from 'pages/Favs';
import { User } from 'pages/User';
import { NotRegisteredUser } from 'pages/NotRegisteredUser';

const UserLogged: FC<any> = ({ children }) => {
  return children({ isAuth: false });
};

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

      <UserLogged>
        {({ isAuth }: { isAuth: boolean }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </div>
  );
};
