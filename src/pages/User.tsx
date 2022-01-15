import { RouteComponentProps } from '@reach/router';
import { SubmitButton } from 'components/SubmitButton';
import { useAuth } from 'context/hooks/useAuth';
import { FC } from 'react';

const User: FC<RouteComponentProps> = () => {
  const value: any = useAuth();
  return (
    <div style={{ padding: '1rem' }}>
      <h1>User</h1>
      <SubmitButton onClick={() => value.removeAuth()}>Logout</SubmitButton>
    </div>
  );
};

export default User;
