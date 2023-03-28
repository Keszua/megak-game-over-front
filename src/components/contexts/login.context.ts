import { createContext } from "react";

interface LoginContextType {
    isLoged: boolean,
    setIsLoged: (val: boolean) => void,
    
    login: string,
    setLogin: (val: string) => void,
}

export const LoginContext = createContext<LoginContextType>( {
    isLoged: false,
    setIsLoged: (val: boolean) => {},
    login: 'Zaloguj',
    setLogin: (val: string) => {},
} );