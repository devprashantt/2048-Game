import React from "react";
import { Route, Routes } from "react-router-dom";

import Game from "./game/Game";
import Main from './container/Main';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/ai' />
                <Route path='/player' element={<Game />} />
            </Routes>
        </>
    );
}

export default App;
