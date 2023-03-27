import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { BasketView } from './views/BasketView';
import { ContactView } from './views/ContactView';
import { NotFoundView } from './views/NotFoundView';
import { LoginView } from './views/LoginView';
import { NewAccountView } from './views/NewAccountView';
import { HomeView } from './views/HomeView';
import { PromotionView } from './views/PromotionView';
import { ServicesView } from './views/ServicesView';
import { ProductsView } from './views/ProductsView';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Menu />
        {/* <Content /> */}
        <Routes >
            <Route path="/" element={<HomeView />} />
            <Route path="/basket" element={<BasketView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/newaccount" element={<NewAccountView />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/promotion" element={<PromotionView />} />
            <Route path="/services" element={<ServicesView />} />
            <Route path="*" element={<NotFoundView />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
