import { FormEvent, useEffect, useState } from "react";
import "./LoginForm.css";
import { AuthLoginEntity, AuthLoginResponse } from 'types';
import { fetchPOST } from "../../utils/fethMetod";
import { NavLink } from "react-router-dom";
import { useContext } from 'react'
import { LoginContext } from '../contexts/login.context'

export const LoginForm = () => {
    const context = useContext(LoginContext);
    const [form, setForm] = useState<AuthLoginEntity>({
        email: '',
        password: '',
    });
    const [errorMessages, setErrorMessages] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [loginUser, setLoginUser] = useState<string>('');
    const [textAccount, setTextAccount] = useState<string>('nagrobka');
    const [textAccountButton, setTextAccountButton] = useState<string>('Załóż nowe konto');
    const [textLoging, setTextLoging] = useState<string>('zakopany');

    const updateForm = (key: string, value: any) => {
        setForm( form => ({
            ...form,
            [key]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            //TODO dodać loader
            const data: AuthLoginResponse = await fetchPOST(`/auth/login`, { ...form });
            
            if (data.isSucces) {
                setIsSubmitted(true);
                setLoginUser(data.login);
                setTimeout( () => setTextLoging('zalogowany'), 4000);
                context.setIsLoged(true);
                context.setLogin(data.login);
            } else {
                setIsSubmitted(false);
                setErrorMessages('Nieporawne dane');
                setLoginUser('');
            }
        } catch (err) {
            setIsSubmitted(false);
            setErrorMessages('Coś poszło nie tak');
            setLoginUser('');
        } finally {
            //TODO wyłączyć loader
        }
    };

    const renderForm = ( 
        <>
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
        <div className="login-tombstone">
            <p> Witaj </p>
            <p> {loginUser} </p>
            <p> Jesteś prawidłowo </p> 
            <p> {textLoging} </p>
        </div>
    )

    useEffect( () => {
        setTimeout( ()=> setTextAccount('konta'), 4000);
    }, [])

    return (
        <div className="login-view">
            {isSubmitted ? renderLoginSuccessful : renderForm}
        </div>
    );
}