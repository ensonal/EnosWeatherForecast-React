import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const ScreenSizeContext = createContext({ isMobile: false, isTablet: false });

interface ScreenSizeProviderProps {
  children: ReactNode;
}

export const ScreenSizeProvider = ({ children }: ScreenSizeProviderProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};
