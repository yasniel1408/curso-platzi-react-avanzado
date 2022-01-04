import { useEffect, useState } from 'react';

export const useFixedCategories = () => {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(
    function () {
      const onScroll = () => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      document.addEventListener('scroll', onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showFixed],
  );

  return { showFixed };
};
