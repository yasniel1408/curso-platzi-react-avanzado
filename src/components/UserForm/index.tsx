import { useInputValue } from 'hooks/useInputValue';
import { FC } from 'react';
import { Button, Form, Input, Title } from './styled';

type AppProps = {
  onSubmit: any;
  title: string;
};

export const UserForm: FC<AppProps> = ({ onSubmit, title }) => {
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
        <Input type="email" placeholder="Email" {...email} />
        <Input type="password" placeholder="Password" {...password} />
        <Button type="submit">{title}</Button>
      </Form>
    </>
  );
};
