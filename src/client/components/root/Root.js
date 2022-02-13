import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Bill from '../bill/Bill';
import Landing from '../landing/Landing';
import Menu from '../menu/Menu';

const Root = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                <Route exact path="/menu" element={<Menu />}></Route>
                <Route exact path="/bill" element={<Bill />}></Route>
            </Routes>
        </HashRouter>
    );
};

export default Root;
