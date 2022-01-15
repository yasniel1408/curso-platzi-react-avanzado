import { useCallback, useState } from 'react';

export const useLocalStorage = ({ key }: { key: string }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const savePersistData = useCallback(
    async ({ data: newData }) => {
      try {
        setLoading(true);
        await localStorage.setItem(key, JSON.stringify(newData));
        setLoading(false);
      } catch (err: any) {
        setError(err);
      }
    },
    [key],
  );

  const getPersistData = useCallback(async () => {
    try {
      setLoading(true);
      const element: any = await localStorage.getItem(key);
      setData(JSON.parse(element));
      setLoading(false);
    } catch (err: any) {
      setError(err);
    }
  }, [key]);

  const getRemoveData = useCallback(async () => {
    try {
      setLoading(true);
      await localStorage.removeItem(key);
      setData(null);
      setLoading(false);
    } catch (err: any) {
      setError(err);
    }
  }, [key]);

  return { getPersistData, savePersistData, getRemoveData, data, loading, error };
};
