import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const ScreenSizeContext = createContext({ isMobile: false, isTablet: false, isHomePageMobile: false });

interface ScreenSizeProviderProps {
    children: ReactNode;
}

export const ScreenSizeProvider = ({ children }: ScreenSizeProviderProps) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);
    const [isHomePageMobile, setIsHomePageMobile] = useState(window.innerWidth <= 860);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width <= 1024);
            setIsHomePageMobile(width <= 860);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <ScreenSizeContext.Provider value={{ isMobile, isTablet, isHomePageMobile }}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

export const useScreenSize = () => {
    return useContext(ScreenSizeContext);
};
