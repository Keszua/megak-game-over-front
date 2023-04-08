import { FormEvent, useEffect, useState } from "react";
import "./LoginForm.css";
import { AuthLoginEntity, AuthLoginResponse, UserPermissions } from 'types';
import { fetchGET, fetchPOST } from "../../utils/fethMetod";
import { NavLink } from "react-router-dom";
import { useContext } from 'react'
import { LoginContext } from '../contexts/login.context'
import { SpinerCandle } from "../common/Spiner/SpinerCandle";

export const LoginForm = () => {
    const context = useContext(LoginContext);
    const [form, setForm] = useState<AuthLoginEntity>({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<string>('');
    const [textAccount, setTextAccount] = useState<string>('nagrobka');
    const [textAccountButton, setTextAccountButton] = useState<string>('Załóż nowe konto');
    const [textLoging, setTextLoging] = useState<string>('zalogowany');
    const [textLogout, setTextLogout] = useState<string>('Wyloguj');

    const updateForm = (key: string, value: any) => {
        setForm( form => ({
            ...form,
            [key]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            setLoading(true);
            const data: AuthLoginResponse = await fetchPOST(`/auth/login`, { ...form });
            
            if (data.isSucces) {
                context.setIsLoged(true);
                context.setLogin(data.login);
                context.setRole(data.role);
                setTextLoging('zakopany');
                context.setIsLoged(true);
                context.setLogin(data.login);
                context.setUserId(data.id);
            } else {
                context.setIsLoged(false);
                setErrorMessages('Nieporawne dane');
                context.setLogin('');
            }
        } catch (err) {
            context.setIsLoged(false);
            setErrorMessages('Coś poszło nie tak');
            context.setLogin('');
            context.setUserId('');
        } finally {
            setLoading(false);
            setTimeout( () => setTextLoging('zalogowany'), 4000);
        }
    };

    const handleLogout = async () => {
        try {
            const data: AuthLoginResponse = await fetchGET(`/auth/logout`);
            setErrorMessages('Zostałes prawidłowo wylogowany');
        } catch (err) {
            setErrorMessages('Coś poszło nie tak');
        } finally {
            context.setIsLoged(false);
            context.setRole(UserPermissions.USER);
            context.setLogin('Zaloguj');
            setTextLogout("Wyloguj");
            context.setUserId('');
        }
    }

    //TODO - coś nie tak z trzymaniem sesji...
    // useEffect( () => {
    //     (async () => {
    //         try {
    //             const data: AuthLoginResponse = await fetchGET(`/auth/islogged`);

    //             console.log('useEfect', data);
    //             if (data.isSucces) {
    //                 context.setIsLoged(true);
    //                 context.setLogin(data.login);
    //             } else {
    //                 context.setIsLoged(false);
    //                 context.setLogin('Zaloguj');
    //             }
    //         } catch(e) {
    //             context.setIsLoged(false);
    //             context.setLogin('Zaloguj');
    //         }
    //     })();
    // }, []);

    const renderForm = ( 
        <>
            {loading && <SpinerCandle />}
            <div className="login-tombstone">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>

                        <div className="login-title">Logowanie</div>
            
                        <label className="login-label">
                            Mail 
                            <input 
                                type="text" 
                                onChange={ e => updateForm('email', e.target.value)} 
                                required 
                            />
                        </label>
                        
                        <label className="login-label">
                            Hasło 
                            <input 
                                type="password" 
                                onChange={ e => updateForm('password', e.target.value)} 
                                required 
                            />
                        </label>
                        
                        { errorMessages 
                            ? <div className="error">{errorMessages}</div>
                            : null
                        }

                        <button type="submit"  className="login-button">
                            Zaloguj się
                        </button>

                    </form>

                </div>
            </div>
            <div className="login-new-count">
                Nie masz jeszcze swojego {textAccount}?
                <NavLink to="/newaccount" className='login-new-count__link' 
                    onMouseOver={ () => ( setTextAccountButton("Wykop nowy grób") )} 
                    onMouseOut={ () => ( setTextAccountButton("Załuż nowe konto") )} 
                > 
                    {textAccountButton}
                </NavLink>
            </div>
        </>
    );

    const renderLoginSuccessful = (
        <>
        <div className="login-tombstone">
            <p> Witaj </p>
            <p> {context.login} </p>
            <p> Jesteś prawidłowo </p> 
            <p> {textLoging} </p>
        </div>
        <button className="login-button" 
            onClick={handleLogout} 
            onMouseOver={ () => ( setTextLogout("Świeć Panie nad jego duszą") )} 
            onMouseOut={ () => ( setTextLogout("Wyloguj") )} 
        >
            {textLogout}
        </button>
        </>
    )

    useEffect( () => {
        setTimeout( ()=> setTextAccount('konta'), 4000);
    }, [])

    return (
        <div className="login-view">
            {context.isLoged ? renderLoginSuccessful : renderForm}
        </div>
    );
}