import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { TriggerExceptionButton } from 'widgets/Sidebar/ui/TriggerExceptionButton/TriggerExceptionButton';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/config';
import { useTranslation } from 'react-i18next';
import style from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

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
            <div className={style.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={style.mainLink}>
                    {t('mainPage')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>{t('aboutPage')}</AppLink>
            </div>
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
