import { useState } from 'react';

export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target }: { target: any }) => setValue(target.value);

  return { value, onChange };
};
