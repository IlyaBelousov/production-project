import React, { useState } from 'react';
import styles from './LoginForm.module.scss'
import { Button, Input } from "shared/ui";
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
    const { t } = useTranslation()

    const [login,setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={styles.LoginForm}>
            <Input label={t('userName')} value={login} onChange={setLogin} type='text' />
            <Input label={t('password')} value={password} onChange={setPassword} type='text' />
            <Button className={styles.loginButton}>{t('login')}</Button>
        </div>
    );
};
