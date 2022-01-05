import { gql } from '@apollo/client';

export const getPhotos = gql`
  query getPhotos($categoryId: String) {
    photos(categoryId: $categoryId) {
      id
      likes
      liked
      src
      categoryId
      userId
    }
  }
`;
