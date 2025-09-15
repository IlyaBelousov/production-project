import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { classNames } from "shared/lib";
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'| 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string
    value?: string
    onChange?: (value: string) => void
    label?: string
}

export const Input = (props: InputProps) => {
    const {
        type = 'text',
        className, onChange, value,label, ...restProps
    } = props

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
    }


    return (
        <div className={classNames({ className: styles.inputWrapper, additionalClasses:[] })}>
            <label className={styles.label} htmlFor={'input'}>{label}</label>
            <input className={classNames({
                className: styles.input,
                additionalClasses: [className]
            })} type={type} value={value} onChange={onChangeHandler} {...restProps} />
        </div>
    );
};
