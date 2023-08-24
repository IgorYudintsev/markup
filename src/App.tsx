import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Basics} from "./components/Basics";
import {Props} from "./components/Props";
import {FirstLesson} from "./components/FirstLesson";

function App() {
    return (
        <div className="App">
            {/*<Basics/>*/}
            {/*<Props/>*/}
            <FirstLesson/>
        </div>
    );
}


export default App;
