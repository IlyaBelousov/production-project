import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { TriggerExceptionButton } from 'widgets/Sidebar/ui/TriggerExceptionButton/TriggerExceptionButton';
import style from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const {
        className,
    } = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames({
                className: style.Sidebar,
                modes: {
                    [style.collapsed]: collapsed,
                },
                additionalClasses: [className],
            })}
        >
            <Button
                className={style.toggle}
                size={ButtonSize.L}
                data-testid="toggleButton"
                onClick={onToggle}
                theme={ThemeButton.INVERTED_BACKGROUND}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <TriggerExceptionButton />

            <div className={classNames({
                className: style.switchers,
                additionalClasses: [collapsed && style.collapsedSwitchers],
            })}
            >
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>

        </div>
    );
};
