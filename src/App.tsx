import { Logo } from 'components/Logo';
import { Home } from 'pages/Home';
import { FC, lazy, Suspense } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Redirect, Router } from '@reach/router';
import { NavBar } from 'components/NavBar';
import { useAuth } from 'context/hooks/useAuth';
// import { UpdateAvailable, UpdateActivatedReload } from 'react-workbox';

const Favs = lazy(() => import('pages/Favs'));
const Details = lazy(() => import('pages/Details'));
const User = lazy(() => import('pages/User'));
const UserAuthentication = lazy(() => import('pages/UserAuthentication'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App: FC = () => {
  const value: any = useAuth();

  const onUpdateClick = async () => {
    if (navigator.serviceWorker) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration?.waiting) {
        registration.waiting.postMessage('skipWaiting');
      }
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
      {/* <UpdateAvailable>
        <button onClick={() => onUpdateClick} type="button">
          Update Available - Click to Install
        </button>
      </UpdateAvailable>
      <UpdateActivatedReload /> */}
    </Suspense>
  );
};
