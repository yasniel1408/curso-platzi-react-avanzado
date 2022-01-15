import { FC } from 'react';
import { Category } from '../Category';
import { Item, List } from './styled';

type AppProps = {
  categories: Array<any>;
  showFixed: boolean;
};

export const ListOfCategory: FC<AppProps> = ({ categories, showFixed }) => {
  const renderList = (fixed: boolean = false) => (
    <List fixed={fixed}>
      {categories.map((category: any) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
