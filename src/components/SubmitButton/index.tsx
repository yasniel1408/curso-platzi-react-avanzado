import { FC } from 'react';
import { Button } from './styled';

type AppProps = {
  children: any;
  disabled?: boolean;
  onClick?: () => void;
};

export const SubmitButton: FC<AppProps> = ({ children, disabled, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick} type="submit">
      {children}
    </Button>
  );
};
