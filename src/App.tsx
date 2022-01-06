import { FC } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { ListOfCategory } from 'components/ListOfCategory';
import { Logo } from 'components/Logo';
import { ListOfPhotoCardsContainer } from 'containers/ListOfPhotoCardsContainer';
import { PhotoCardWithQuery } from 'containers/PhotoCardWithQueryContainer';

export const App: FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = Number(urlParams.get('detail'));

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {categoryId ? (
        <PhotoCardWithQuery id={categoryId} />
      ) : (
        <>
          <ListOfCategory />
          <ListOfPhotoCardsContainer />
        </>
      )}
    </div>
  );
};
