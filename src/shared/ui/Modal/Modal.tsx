import React, { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui';
import cls from './Modal.module.scss';
import { useTheme } from "app/providers/ThemeProvider";

type ModalProps = {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: VoidFunction
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, onClose, isOpen,
    } = props;

    const { theme } = useTheme()

    const handleClose = useCallback(() => {
        onClose?.();
    }, [onClose]);

    const handleContentClick = (e: React.MouseEvent) => {
        e?.stopPropagation();
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return isOpen && (
        <Portal>
            <div className={classNames({ className: cls.modal, additionalClasses: [className, theme] })}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
