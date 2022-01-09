import { ListOfCategory } from 'components/ListOfCategory';
import { FC, useEffect } from 'react';
import { useCategoriesData } from './hooks/useCategoriesData';
import { useFixedCategories } from './hooks/useFixedCategories';

export const ListOfCategoryContainer: FC = () => {
  const { getCategories, categories, loading, error } = useCategoriesData();
  const { showFixed } = useFixedCategories();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  if (loading) return <>Loading...</>;
  if (error) return <p>Error! {error}</p>;

  return <ListOfCategory showFixed={showFixed} categories={categories} />;
};
