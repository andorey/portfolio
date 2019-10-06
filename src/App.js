import React from 'react';
import './App.css';
import Header from "./Heder/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

function App() {
  return (
    <div className="App">
        <div className="portfolio">
            <Header />
            <Footer />
            <Main />

        </div>
    </div>
  );
}

export default App;
