import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'app/config';

import style from './Navbar.module.scss';

export const Navbar = (props:{
  className?: string
}) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    return (
        <div className={classNames({
            className: style.Navbar,
            modes: {},
            additionalClasses: [className],
        })}
        >
            <div className={style.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={style.mainLink}>{t('mainPage')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>{t('aboutPage')}</AppLink>
            </div>

        </div>
    );
};
