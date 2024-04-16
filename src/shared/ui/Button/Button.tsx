import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';

import style from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
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
