import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import MainBody from './components/MainBody/MainBody'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
