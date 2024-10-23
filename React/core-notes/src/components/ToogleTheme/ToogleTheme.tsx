import { useEffect, useState } from 'react';
import styles from './toogleTheme.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
export const ToogleTheme = () => {
    const [theme, setTheme] = useState(false);
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme:dark)'))
            setTheme(true);
    }, [])
    const toogleTheme = () => {
        setTheme(!theme);
    }
    return (
        <div className={styles['toogle-theme']}>
            <input type="checkbox" className={styles['toogle-theme__input']} defaultChecked={theme} onClick={toogleTheme} />
            <span className={styles['toogle-theme__switch']}>
                {
                    theme ?
                        (<FontAwesomeIcon icon={faMoon} className={styles['toogle-theme__icon--dark']} />)
                        :
                        (<FontAwesomeIcon icon={faSun} className={styles['toogle-theme__icon--light']} />)
                }
            </span>
        </div>
    )
}