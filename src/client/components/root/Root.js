import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BillConnector from '../bill/Bill.connector';
import LandingConnector from '../landing/Landing.connector';
import MenuConnector from '../menu/Menu.connector';
import ModalConnector from '../modal/Modal.connector';
import PartyConnector from './../Party/Party.connector';
import './Root.scss';

const Root = () => (
    <HashRouter>
        <ModalConnector></ModalConnector>
        <main className="main">
            <Routes>
                <Route exact path="/" element={<LandingConnector />}></Route>
                <Route exact path="/menu" element={<MenuConnector />}></Route>
                <Route exact path="/bill" element={<BillConnector />}></Route>
            </Routes>
        </main>
        <footer className="footer">
            <PartyConnector></PartyConnector>
        </footer>
    </HashRouter>
);

export default Root;
