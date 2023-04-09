import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import MainPageAsync from "./pages/MainPage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <div className='app'>
            <Link to={'/main'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>loading...</div>}>

            <Routes>
                <Route path={'/about'} element={
                        <AboutPageAsync/>
                }/>
                <Route path={'/main'} element={
                        <MainPageAsync/>
                }/>

            </Routes>
            </Suspense>

        </div>
    );
};

export default App;