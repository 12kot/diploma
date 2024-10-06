import { useEffect, useCallback } from 'react';

export const useEscapeKey = (handler: () => void, isActive: boolean = true) => {
  const handleEscKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler();
      }
    },
    [handler],
  );

  useEffect(() => {
    if (isActive) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      if (isActive) {
        document.removeEventListener('keydown', handleEscKey);
      }
    };
  }, [isActive, handleEscKey]);
};
