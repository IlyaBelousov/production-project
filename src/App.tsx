import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import MainPageAsync from "./pages/MainPage/MainPage.async";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import {ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

const App = () => {

    const { theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
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