import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useHandleNavigation = (setIsOpen: () => void) => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = location.pathname;

  useEffect(() => {
    if (prevLocation !== location.pathname) {
      setIsOpen();
    }
  }, [location.pathname, prevLocation, setIsOpen]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen();
  };

  return { handleNavigate };
};
