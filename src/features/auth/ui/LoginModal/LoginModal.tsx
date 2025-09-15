import React from 'react';
import { Modal } from "shared/ui";
import { LoginForm } from "../LoginForm/LoginForm";

export const LoginModal = ({ isOpen, onClose }: {isOpen: boolean; onClose: VoidFunction}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    );
};
