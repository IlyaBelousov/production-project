import React from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

const App = () => {

    const { theme} = useTheme();

    const appClassNames = classNames({
        className: 'app',
        modes: {},
        additionalClasses: [theme]
    });

    return (
        <div className={appClassNames}>
            <Navbar />
            <AppRouter/>
        </div>
    );
};

export default App;