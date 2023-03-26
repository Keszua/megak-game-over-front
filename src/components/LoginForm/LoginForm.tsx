import { FormEvent, useState } from "react";
import "./LoginForm.css";
import { AuthLoginEntity, AuthLoginResponse } from 'types';
import { apiUrl } from "../../config/api";

export const LoginForm = () => {
    const [form, setForm] = useState<AuthLoginEntity>({
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

        console.log(form.email, form.password);
        setErrorMessages('Coś poszło nie tak');
        try {
            //TODO dodać loader
            const res = await fetch(`${apiUrl}/auth/login`);
            const data: AuthLoginResponse = await res.json();
            console.log(data);

            if (data.isSucces) {
                setIsSubmitted(true);    
            } else {
                setIsSubmitted(false);    
                setErrorMessages('Nie porawne dane');
            }
        } catch (err) {
            setIsSubmitted(false);
            setErrorMessages('Coś poszło nie tak');
        } finally {
            //TODO wyłączyć loader
        }
    };

    const renderForm = ( 
        <div className="login-form">
            <form onSubmit={handleSubmit}>

                <p className="input-containerX">
                    Mail 
                    <label>
                        <input 
                            type="text" 
                            onChange={ e => updateForm('email', e.target.value)} 
                            required 
                        />
                    </label>
                </p>
                
                <p className="input-containerX">
                    Hasło 
                    <label>
                        <input 
                            type="password" 
                            onChange={ e => updateForm('password', e.target.value)} 
                            required 
                        />
                    </label>
                </p>
                
                { errorMessages 
                    ?  <div className="error">{errorMessages}</div>
                    : null
                }

                <div className="login-button">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="login-view">
          <div className="login-container">
            <div className="title">Zaloguj się</div>
            {isSubmitted ? <div>Jesteś prawidłowo zalogowany</div> : renderForm}
          </div>
        </div>
    );
}