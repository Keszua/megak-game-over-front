import { createContext } from "react";
import { UserPermissions } from 'types';

interface LoginContextType {
    isLoged: boolean,
    setIsLoged: (val: boolean) => void,
    
    login: string,
    setLogin: (val: string) => void,

    userId: string,
    setUserId: (val: string) => void,

    role: UserPermissions,
    setRole: (val: UserPermissions) => void,

    basketNoEmpty: boolean,
    setBasketNoEmpty: (val: boolean) => void,
}

export const LoginContext = createContext<LoginContextType>( {
    isLoged: false,
    setIsLoged: (val: boolean) => {},
    login: 'Zaloguj',
    setLogin: (val: string) => {},
    userId: '',
    setUserId: (val: string) => {},
    role: UserPermissions.USER,
    setRole: (val: UserPermissions) => {},
    basketNoEmpty: false,
    setBasketNoEmpty: (val: boolean) => {},
} );