import { gql, useMutation } from '@apollo/client';
import { UserForm } from 'components/UserForm';
import React, { FC } from 'react';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const RegisterContainer: FC = () => {
  const [signup, { data, loading, error }] = useMutation(REGISTER);

  const handleSubmit = ({ email, password }: { email: string; password: string }) => {
    console.log({ email, password });
    const input = { email, password };
    signup({ variables: { input } });
  };

  if (loading) return <>Submitting...</>;
  if (error) return <>Submission error! {error.message}</>;

  return <UserForm onSubmit={handleSubmit} title="Register:" />;
};
