import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestInterface } from 'types';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';

function App() {
  const jakasStala: TestInterface = {
    test: 'blabla',
  }


  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Menu />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
