import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Layouts/Navbar';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="*" element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Index;