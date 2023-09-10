import {classNames} from "shared/lib/classNames/classNames";
import style from './AppLink.module.scss'
import React from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
interface AppLinkProps extends  LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    }= props;
    
    return (
        <Link to={to} className={classNames({
                className: style.AppLink,
            modes: {},
            additionalClasses: [className, style[theme]]
            }
        )}
              {...otherProps}
        >
            {children}
        </Link>
    );
};