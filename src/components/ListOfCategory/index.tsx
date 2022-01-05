import { FC, useEffect } from 'react';
import { Category } from '../Category';
import { useCategoriesData } from './hooks/useCategoriesData';
import { useFixedCategories } from './hooks/useFixedCategories';
import { Item, List } from './styled';

export const ListOfCategory: FC = () => {
  const { getCategories, categories, loading, error } = useCategoriesData();
  const { showFixed } = useFixedCategories();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const renderList = (fixed: boolean = false) => (
    <List fixed={fixed}>
      {error}
      {categories.map((category: any) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  if (loading) return <>Loading...</>;

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
