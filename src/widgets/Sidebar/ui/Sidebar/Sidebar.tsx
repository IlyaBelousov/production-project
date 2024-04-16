import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';

import style from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const {
    className,
  } = props;

  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames({
      className: style.Sidebar,
      modes: {
        [style.collapsed]: collapsed,
      },
      additionalClasses: [className],
    })}
    >
      <Button onClick={onToggle} theme={ThemeButton.CLEAR}>
        TOGGLE
      </Button>

      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>

    </div>
  );
};
