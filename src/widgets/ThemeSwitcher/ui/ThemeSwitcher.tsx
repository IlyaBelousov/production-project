import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui';

export const ThemeSwitcher = (props:{
  className?: string
}) => {
    const {
        className,
    } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames({
                className: '',
                modes: {},
                additionalClasses: [className],
            })}
            style={{
                marginRight: 14,
            }}
            onClick={toggleTheme}
        >
            {
                theme === Theme.LIGHT
                    ? <DarkIcon /> : <LightIcon />
            }
        </Button>
    );
};
