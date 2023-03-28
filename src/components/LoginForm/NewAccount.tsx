import { FormEvent, useEffect, useState } from "react";
import "./LoginForm.css";
import { UserRegisterEntity, UserRegisterResponse } from 'types';
import { fetchPOST } from "../../utils/fethMetod";
import { NavLink } from "react-router-dom";

export const NewAccount = () => {
    const [form, setForm] = useState<UserRegisterEntity>({
        login: '',
        email: '',
        password: '',
    });
    const [errorMessages, setErrorMessages] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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
            const data: UserRegisterResponse = await fetchPOST(`/user/register`, { ...form });
            
            if (data.isSucces) {
                setIsSubmitted(true);
            } else {
                setIsSubmitted(false);
                setErrorMessages(data.message);
            }
        } catch (err) {
            setIsSubmitted(false);
            setErrorMessages('Coś poszło nie tak');
        } finally {
            //TODO wyłączyć loader
        }
    };

    const renderForm = ( 
        <>
            <div className="login-tombstone">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>

                        <div className="login-title">Nowe konto</div>
            
                        <label className="login-label">
                            Login 
                            <input 
                                type="text"
                                onChange={ e => updateForm('login', e.target.value)} 
                                required
                                minLength={3}
                            />
                        </label>
                        
                        <label className="login-label">
                            Mail 
                            <input 
                                type="email"
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
                                minLength={6}
                            />
                        </label>
                        
                        { errorMessages 
                            ? <div className="error">{errorMessages}</div>
                            : null
                        }

                        <button type="submit"  className="login-button">
                            Dodaj konto
                        </button>

                    </form>

                </div>
            </div>
        </>
    );

    const renderLoginSuccessful = (
        <div className="login-tombstone">
            <p> Witaj </p>
            <p> {form.login} </p>
            <p> dodano </p>
            <p> nowe konto </p>
        </div>
    )

    return (
        <div className="login-view">
            {isSubmitted ? renderLoginSuccessful : renderForm}
        </div>
    );
}