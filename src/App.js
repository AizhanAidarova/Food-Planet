import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPages from './Pages/AllPages/AllPages'
import Basket from './Pages/Basket/Basket';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="index" element = {<AllPages/>} />
                    <Route path="basket" element = {<Basket/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;