import { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Subtitle, Title } from './styled';

type AppProps = { children: ReactNode; title: string; subtitle?: string };

export const Layout: FC<AppProps> = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </>
  );
};
