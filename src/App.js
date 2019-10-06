import React from 'react';
import './App.css';
import Header from "./Heder/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import RemoteJob from "./RemoteJob/RemoteJob";
import Contacts from "./Contacts/Contacts";

function App() {
  return (
    <div className="App">
        <div className="portfolio">
            <Header />
            <Main />
            <Skills />
            <Projects />
            <RemoteJob />
            <Contacts />
            <Footer />
        </div>
    </div>
  );
}

export default App;
