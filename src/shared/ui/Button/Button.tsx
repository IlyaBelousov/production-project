import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes } from 'react';

import style from './Button.module.scss';

export const enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND= 'background',
  INVERTED_BACKGROUND = 'invertedBackground'

}

export const enum ButtonSize {
    L = 'sizeL',
    M = 'sizeM'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
    size?: ButtonSize
}
export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        size = ButtonSize.L,
        ...otherProps
    } = props;

    const modes = {
        [style[size]]: true,
    };

    return (
        <button
            className={classNames({
                className: style.Button,
                modes,
                additionalClasses: [className, style[theme]],
            })}
            {...otherProps}
        >
            {children}
        </button>
    );
};
