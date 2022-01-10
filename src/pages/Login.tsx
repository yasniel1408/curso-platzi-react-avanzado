import { RouteComponentProps } from '@reach/router';
import { LoginForm } from 'components/LoginForm';
import { FC } from 'react';

export const Login: FC<RouteComponentProps> = () => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(e);
  };
  return <LoginForm onSubmit={handleSubmit} />;
};
