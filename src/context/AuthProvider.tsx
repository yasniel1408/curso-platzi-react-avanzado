import { FC, useMemo, useState } from 'react';
import { GlobalContext } from './GlobalContext';

const AuthProvider: FC<any> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const value: any = useMemo(() => {
    return {
      isAuth,
      activateAuth: () => {
        setIsAuth(true);
      },
      deactivateAuth: () => {
        setIsAuth(false);
      },
    };
  }, [isAuth]);

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export { AuthProvider };
