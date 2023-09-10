import {classNames} from "shared/lib/classNames/classNames";
import style from './Navbar.module.scss'
import {AppLink} from "shared/ui";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import React from "react";

export const Navbar = (props:{
                           className?: string
                       }) => {
    const {
        className,
    }= props;
    return (
        <div className={classNames({
                className: style.Navbar,
            modes: {},
            additionalClasses: [className]
            }
        )}>
            <ThemeSwitcher/>
            <div className={style.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/main'} className={style.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>

        </div>
    );
};

