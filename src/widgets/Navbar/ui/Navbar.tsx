import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import React from 'react';
import { useTranslation } from 'react-i18next';

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
        <AppLink theme={AppLinkTheme.SECONDARY} to="/main" className={style.mainLink}>{t('mainPage')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('aboutPage')}</AppLink>
      </div>

    </div>
  );
};
