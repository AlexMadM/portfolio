import './App.css';
import styled from 'styled-components';
import Header from "./layout/header/Header";
import Main from "./layout/section/main/Main";
import Skills from "./layout/section/skills/Skills";
import Works from "./layout/section/works/Works";
import Testimony from "./layout/section/testimony/Testimony";
import Contacts from "./layout/section/contacts/Contacts";
import Slogan from "./layout/section/slogan/Slogan";
import Footer from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";


function App() {
    return (
        <div className="App">
            <Particle/>
           <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;