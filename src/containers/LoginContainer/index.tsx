import { gql, useMutation } from '@apollo/client';
import { UserForm } from 'components/UserForm';
import { FC, useEffect } from 'react';
import { useAuth } from 'context/hooks/useAuth';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const LoginContainer: FC = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const value: any = useAuth();

  useEffect(() => {
    if (data) value.activateAuth({ token: data?.login });
  }, [data, value]);

  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    const input = { email, password };
    await login({ variables: { input } });
  };

  return <UserForm onSubmit={handleSubmit} title="Login:" loading={loading} error={error} />;
};
