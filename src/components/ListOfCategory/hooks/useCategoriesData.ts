import { useCallback, useState } from 'react';

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getCategories: any = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('https://petgram-server-livid.vercel.app/categories');
      const json = await res.json();
      setCategories(json);
      setLoading(false);
    } catch (err: any) {
      setError(err?.message);
    }
  }, []);

  return {
    getCategories,
    categories,
    loading,
    error,
  };
};
