import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui';
import React, { useCallback, useState } from 'react';

import style from './Navbar.module.scss';
import { Counter } from "entities/Counter";
import { LoginModal } from "features/auth";

export const Navbar = (props:{
  className?: string
}) => {
    const {
        className,
    } = props;

    const [isOpenedAuthModal, setIsOpenedAuthModal] = useState(false);

    const handleTOpenAuthModal = useCallback(() => {
        setIsOpenedAuthModal(true);
    }, []);

    const handleCloseAuthModal = () => {
        setIsOpenedAuthModal(false)
    }

    return (
        <div className={classNames({
            className: style.Navbar,
            modes: {},
            additionalClasses: [className],
        })}
        >
            <Counter />

            <Button onClick={handleTOpenAuthModal} className={style.signInButton} theme={ThemeButton.CLEAR}>
                {'ВОЙТИ'}
            </Button>
            <LoginModal isOpen={isOpenedAuthModal} onClose={handleCloseAuthModal}/>

        </div>
    );
};
