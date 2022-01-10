import { RouteComponentProps } from '@reach/router';
import { UserForm } from 'components/UserForm';
import { FC } from 'react';

export const Login: FC<RouteComponentProps> = () => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <UserForm onSubmit={handleSubmit} title="Login:" />
      <UserForm onSubmit={handleSubmit} title="Register:" />
    </>
  );
};
