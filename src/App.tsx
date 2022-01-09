import { Logo } from 'components/Logo';
import { ListOfCategoryContainer } from 'containers/ListOfCategoryContainer';
import { ListOfPhotoCardsContainer } from 'containers/ListOfPhotoCardsContainer';
import { PhotoCardWithQuery } from 'containers/PhotoCardWithQueryContainer';
import { FC } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';

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
          <ListOfCategoryContainer />
          <ListOfPhotoCardsContainer />
        </>
      )}
    </div>
  );
};
