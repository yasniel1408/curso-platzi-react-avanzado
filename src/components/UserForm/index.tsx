import { useInputValue } from 'hooks/useInputValue';
import { FC } from 'react';
import { Button, Error, Form, Input, Title } from './styled';

type AppProps = {
  onSubmit: any;
  title: string;
  loading: boolean;
  error: any;
};

export const UserForm: FC<AppProps> = ({ onSubmit, title, loading, error }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input disabled={loading} type="email" placeholder="Email" {...email} />
        <Input disabled={loading} type="password" placeholder="Password" {...password} />
        <Button disabled={loading} type="submit">
          {loading ? 'Submitting...' : title}
        </Button>
        {error && <Error>Submission error! {error.message}</Error>}
      </Form>
    </>
  );
};
