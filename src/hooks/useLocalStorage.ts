import { useCallback, useState } from 'react';

export const useLocalStorage = ({ key }: { key: string }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const savePersistData = useCallback(
    async ({ data: newData }) => {
      try {
        await localStorage.setItem(key, JSON.stringify(newData));
        setLoading(false);
      } catch (err: any) {
        setError(err);
      }
    },
    [key, setLoading, setError],
  );

  const getPersistData = useCallback(async () => {
    try {
      const element: any = await localStorage.getItem(key);
      setData(JSON.parse(element));
      setLoading(false);
    } catch (err: any) {
      setError(err);
    }
  }, [key, setLoading, setError]);

  return { getPersistData, savePersistData, data, loading, error };
};
