import { gql, useMutation } from '@apollo/client';
import { UserForm } from 'components/UserForm';
import { FC, useEffect } from 'react';
import { useAuth } from 'context/hooks/useAuth';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const RegisterContainer: FC = () => {
  const [signup, { data, loading, error }] = useMutation(REGISTER);
  const value: any = useAuth();

  useEffect(() => {
    if (data) value.activateAuth({ token: data?.login });
  }, [data, value]);

  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    const input = { email, password };
    await signup({ variables: { input } });
  };

  return <UserForm onSubmit={handleSubmit} title="Register:" loading={loading} error={error} />;
};
