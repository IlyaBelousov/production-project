import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Modal, ThemeButton } from 'shared/ui';
import React, { useCallback, useState } from 'react';

import style from './Navbar.module.scss';
import { Counter } from "entities/Counter";

export const Navbar = (props:{
  className?: string
}) => {
    const {
        className,
    } = props;

    const [isOpenedAuthModal, setIsOpenedAuthModal] = useState(false);

    const handleToggleModal = useCallback(() => {
        setIsOpenedAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames({
            className: style.Navbar,
            modes: {},
            additionalClasses: [className],
        })}
        >
            <Counter />

            <Button onClick={handleToggleModal} className={style.signInButton} theme={ThemeButton.CLEAR}>
                {'ВОЙТИ'}
            </Button>
            <Modal isOpen={isOpenedAuthModal} onClose={handleToggleModal}>
                {'Lorem ipsum dolor sit amet, \n' +
                    '                consectetur adipisicing elit. Dignissimos expedita\n' +
                    '                inventore minima ratione? Aperiam consequatur eius iusto \n' +
                    '                molestias nisi quae quis soluta veritatis.'}
            </Modal>

        </div>
    );
};
