import { createContext } from "react";
import { UserPermissions } from 'types';

interface LoginContextType {
    isLoged: boolean,
    setIsLoged: (val: boolean) => void,
    
    login: string,
    setLogin: (val: string) => void,

    role: UserPermissions,
    setRole: (val: UserPermissions) => void,
}

export const LoginContext = createContext<LoginContextType>( {
    isLoged: false,
    setIsLoged: (val: boolean) => {},
    login: 'Zaloguj',
    setLogin: (val: string) => {},
    role: UserPermissions.USER,
    setRole: (val: UserPermissions) => {},
} );