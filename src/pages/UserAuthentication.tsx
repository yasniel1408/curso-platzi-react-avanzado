import { RouteComponentProps } from '@reach/router';
import { RegisterContainer } from 'containers/RegisterContainer';
import { FC } from 'react';

export const UserAuthentication: FC<RouteComponentProps> = () => {
  return <RegisterContainer />;
};
