import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookView from '../features/BookView';
import Navbar from '../Layouts/Navbar';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <main>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path='/bookview' element={<BookView></BookView>}></Route>
                    <Route path="*" element={<Error></Error>}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default Index;