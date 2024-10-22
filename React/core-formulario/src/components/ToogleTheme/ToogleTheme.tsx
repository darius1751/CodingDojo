import { useEffect } from 'react';
import styles from './toogle-theme.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
type Props = {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>
}
export const ToogleTheme = ({ theme, setTheme }: Props) => {

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches)
            setTheme(true);
        else
            setTheme(false);
    }, []);
    const toogle = () => {
        console.log({ theme });
        setTheme(!theme);
    }
    return (
        <div>
            <div className={styles['toogle-theme']}>
                <input
                    type="checkbox"
                    className={styles['toogle-theme__input']}
                    defaultChecked={!theme}
                    onClick={toogle}
                />
                <span className={styles['toogle-theme__switch']}></span>
            </div>
            {
                theme ?
                    (<FontAwesomeIcon icon={faMoon} className={styles['toogle-theme__icon'] + ' ' + 'dark'} />)
                    :
                    (<FontAwesomeIcon icon={faSun} className={styles['toogle-theme__icon'] + ' ' + 'light'} />)
            }
        </div>
    )
}