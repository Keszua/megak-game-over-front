import { useEffect, useState } from 'react';import './App.css';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { BasketView } from './views/BasketView';
import { ContactView } from './views/ContactView';
import { NotFoundView } from './views/NotFoundView';
import { LoginView } from './views/LoginView';
import { NewAccountView } from './views/NewAccountView';
import { HomeView } from './views/HomeView';
import { PromotionView } from './views/PromotionView';
import { ProductItemView } from './views/ProductItemView';
import { ProductsEditView } from './views/ProductEditView';
import { ServicesView } from './views/ServicesView';
import { ProductsView } from './views/ProductsView';
import { LoginContext } from './components/contexts/login.context';
import { AuthLoginResponse, UserPermissions } from 'types';
import { fetchGET } from './utils/fethMetod';

export const App = () => {
    const [isLoged, setIsLoged] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('Zaloguj');
    const [role, setRole] = useState<UserPermissions>(UserPermissions.USER);
    
    //TODO COś jest nie tak z trzymaniem sesji
    // useEffect( () => {
    //     (async () => {
    //         try {
    //             const data: AuthLoginResponse = await fetchGET(`/auth/islogged`);

    //             console.log(data);
    //             if (data.isSucces) {
    //                 setIsLoged(true);
    //                 setLogin(data.login);
    //             } else {
    //                 setIsLoged(false);
    //                 setLogin('Zaloguj');
    //             }
    //         } catch(e) {
    //             setIsLoged(false);
    //             setLogin('Zaloguj');
    //         }
    //     })();
    // }, []);
        
    return (
        <div className="App">
            <LoginContext.Provider value={{
                isLoged,
                setIsLoged,
                login,
                setLogin,
                role,
                setRole,
            }}>
                <Header />
                <div className='body'>
                    <Menu />
                    <Routes >
                        <Route path="/" element={<HomeView />} />
                        <Route path="/basket" element={<BasketView />} />
                        <Route path="/contact" element={<ContactView />} />
                        <Route path="/login" element={<LoginView />} />
                        <Route path="/newaccount" element={<NewAccountView />} />
                        <Route path="/products" element={<ProductsView />} />
                        <Route path="/product-item" element={<ProductItemView />} />
                        <Route path="/product-edit" element={<ProductsEditView />} />
                        <Route path="/promotion" element={<PromotionView />} />
                        <Route path="/services" element={<ServicesView />} />
                        <Route path="*" element={<NotFoundView />} />
                    </Routes>
                </div>
                <div style={{ flexGrow: '1'}}></div>
                <Footer />
            </LoginContext.Provider>
        </div>
    );
}