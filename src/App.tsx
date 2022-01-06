import { FC } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { ListOfCategory } from 'components/ListOfCategory';
import { Logo } from 'components/Logo';
import { ListOfPhotoCardsContainer } from 'containers/ListOfPhotoCardsContainer';

export const App: FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('detail');

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {categoryId ? (
        'Detail ID'
      ) : (
        <>
          <ListOfCategory />
          <ListOfPhotoCardsContainer />
        </>
      )}
    </div>
  );
};
