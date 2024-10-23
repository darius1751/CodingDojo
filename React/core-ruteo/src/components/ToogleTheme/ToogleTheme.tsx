import { useState } from "react"
import styles from './toogleTheme.module.css';

export const ToogleTheme = () => {
    const isDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
    const [theme, setTheme] = useState(isDark);
    const toogleTheme = () => {
        setTheme(!theme);
    }
    return (
        <div className={styles.toogleTheme}>
            <div className={styles.slider}>
                <input
                    type="checkbox"
                    className={styles.input}
                    defaultChecked={theme}
                    onClick={toogleTheme}
                />
                <span className={styles.switch}></span>
            </div>
        </div>
    )
}