import { createContext } from 'react';

interface AppContextInterface {
  isAuth: boolean;
  activateAuth: Function;
}

const GlobalContext = createContext<AppContextInterface | null>(null);

export { GlobalContext };
