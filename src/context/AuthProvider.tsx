import { FC, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { GlobalContext } from './GlobalContext';

const AuthProvider: FC<any> = ({ children }) => {
  const { getPersistData, savePersistData, getRemoveData, data } = useLocalStorage({
    key: 'USER_TOKEN',
  });
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    getPersistData();
  }, [getPersistData]);

  useEffect(() => {
    setIsAuth(!!data);
  }, [data]);

  const value: any = useMemo(() => {
    return {
      isAuth,
      activateAuth: ({ token }: { token: string }) => {
        savePersistData({ data: token });
        setIsAuth(true);
      },
      removeAuth: () => {
        getRemoveData();
        setIsAuth(false);
      },
    };
  }, [getRemoveData, isAuth, savePersistData]);

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export { AuthProvider };
