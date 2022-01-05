import React, { FC } from 'react';
import { Anchor, Image } from './styled';

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.png';

type AppProps = {
  cover?: string;
  path?: string;
  emoji?: string;
};

export const Category: FC<AppProps> = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
