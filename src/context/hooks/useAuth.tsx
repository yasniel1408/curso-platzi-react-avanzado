import { GlobalContext } from 'context/GlobalContext';
import { useContext } from 'react';

const useAuth = () => useContext(GlobalContext);

export { useAuth };
