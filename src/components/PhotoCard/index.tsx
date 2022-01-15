import { Link, navigate } from '@reach/router';
import { ToggleLikeMutationContainer } from 'containers/ToggleLikeMutationContainer';
import { useAuth } from 'context/hooks/useAuth';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { ImgWrapper, Img, Article } from './styled';

const DEFAULT_IMAGE =
  // eslint-disable-next-line max-len
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

type AppProps = {
  id?: number;
  likes?: number;
  src?: string;
  liked?: boolean;
};

export const PhotoCard: FC<AppProps> = ({ id, likes = 0, src = DEFAULT_IMAGE, liked }) => {
  const { ref, inView } = useInView({
    fallbackInView: true,
  });

  const auth: any = useAuth();

  return (
    <Article ref={ref}>
      {inView && (
        <Link to={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
        </Link>
      )}
      <ToggleLikeMutationContainer
        id={id}
        liked={liked}
        likes={likes}
        handleLike={!auth.isAuth ? () => navigate('/user') : () => {}}
      />
    </Article>
  );
};
