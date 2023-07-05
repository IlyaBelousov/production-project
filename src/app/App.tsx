import React, {Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {

    const { theme, toggleTheme} = useTheme();

    const appClassNames = classNames({
        className: 'app',
        modes: {},
        additionalClasses: [theme]
    });

    return (
        <div className={appClassNames}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/main'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>loading...</div>}>

            <Routes>
                <Route path={'/about'} element={
                        <AboutPage/>
                }/>
                <Route path={'/main'} element={
                        <MainPage/>
                }/>

            </Routes>
            </Suspense>

        </div>
    );
};

export default App;