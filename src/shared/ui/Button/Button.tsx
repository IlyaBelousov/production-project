import {classNames} from "shared/lib/classNames/classNames";
import style from './Button.module.scss'
import {ButtonHTMLAttributes} from "react";

export enum ThemeButton {
    CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: string
}
export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
    ...otherProps
    }= props;
    
    return (
        <button className={classNames({
                className: style.Button,
            modes: {},
            additionalClasses: [className, style[theme]]
            }
        )}
                {...otherProps}
        >
            {children}
        </button>
    );
};

