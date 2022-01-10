import { createContext } from 'react';

type AppContextInterface = {
  isAuth?: any;
  activateAuth?: Function;
  deactivateAuth?: Function;
};

const GlobalContext: any = createContext<AppContextInterface | null>(null);

export { GlobalContext };
