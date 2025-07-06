import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes } from 'react';

import style from './Button.module.scss';

export const enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}
export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames({
                className: style.Button,
                modes: {},
                additionalClasses: [className, style[theme]],
            })}
            {...otherProps}
        >
            {children}
        </button>
    );
};
