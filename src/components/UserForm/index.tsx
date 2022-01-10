import { useInputValue } from 'hooks/useInputValue';
import { FC } from 'react';
import { Button, Form, Input, Title } from './styled';

type AppProps = {
  onSubmit: any;
  title: string;
};

export const UserForm: FC<AppProps> = ({ onSubmit, title }: AppProps) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input type="email" placeholder="Email" {...email} />
        <Input type="password" placeholder="Password" {...password} />
        <Button type="submit">{title}</Button>
      </Form>
    </>
  );
};
