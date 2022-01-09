/* eslint-disable no-unused-vars */
import { FC } from 'react';
import { Anchor, Image } from './styled';

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.png';

type AppProps = {
  cover?: string;
  id?: string;
  emoji?: string;
};

export const Category: FC<AppProps> = ({ cover = DEFAULT_IMAGE, id, emoji = '?' }) => (
  <Anchor to={`/pets/${id}`}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
