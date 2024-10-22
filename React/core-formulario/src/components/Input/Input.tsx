import { ChangeEventHandler, HTMLInputTypeAttribute, useId } from "react";
import styles from './input.module.css';

type Props = {
    label: string;
    name: string;
    type?: HTMLInputTypeAttribute;
    value: string;
    handleChange: ChangeEventHandler;
    required?: boolean;
    minLength?: number;
}
export const Input = ({ label, name, type = 'text', value, handleChange, required = true, minLength = 4 }: Props) => {
    const id = useId();
    return (
        <div className={styles.field}>
            <label htmlFor={id} className={styles.field__label }>{label}:</label>
            <input
                type={type}
                name={name}
                value={value}
                id={id}
                onChange={handleChange}
                required={required}
                minLength={minLength}
                className={styles.field__input}
            />
        </div>
    )
}