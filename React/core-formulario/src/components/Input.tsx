import { ChangeEventHandler, useId } from "react";
import styles from './Input.module.css';

export type InputType = {
    label: string;
    name: string;
    type: "text" | "password" | "email";
    value: string;
    placeholder?: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
}
export const Input = ({ label, value, placeholder, type, name, handleChange, required = true }: InputType) => {
    const id = useId();
    return (
        <div className={styles.field}>

            <label htmlFor={id} className={styles.field__label}>{label}:</label>
            <input
                className={styles.field__input}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                id={id}
                onChange={handleChange}
                required={required}
            />
        </div>
    )
}