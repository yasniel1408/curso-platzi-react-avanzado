import { gql } from '@apollo/client';

export const GET_PHOTOS = gql`
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
