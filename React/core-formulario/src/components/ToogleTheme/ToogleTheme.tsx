import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from './toogle-theme.module.css';
type Props = {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>
}
export const ToogleTheme = ({ theme, setTheme }: Props) => {
    const toogle = () => {
        
        setTheme(!theme);
    }
    return (
        <div>
            <div className={styles['toogle-theme']}>
                <input
                    type="checkbox"
                    className={styles['toogle-theme__input']}
                    defaultChecked={theme}
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