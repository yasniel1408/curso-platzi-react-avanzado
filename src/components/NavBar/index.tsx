import { FC } from 'react';
import { MdFavoriteBorder, MdOutlineHome, MdPersonOutline } from 'react-icons/md';
import { Link, Nav } from './styled';

const SIZE = '32px';

export const NavBar: FC = () => {
  return (
    <Nav>
      <Link to="/">
        <MdOutlineHome size={SIZE} />
      </Link>
      <Link to="/favs">
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link to="/user">
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  );
};
