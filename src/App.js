/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Main from './container/Main';
import Game from './game/GameUI';

function App() {

    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/ai' />
                <Route path='/player' element={<Game />} />
            </Routes>
        </div>
    );
}

export default App;
