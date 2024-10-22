import styles from './toogleTheme.module.css';
type Props = {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>
}
export const ToogleTheme = ({ theme, setTheme }: Props) => {
    const toogleTheme = () => {
        setTheme(!theme);
    }
    return (
        <div className={styles['toogle-theme']}>
            <div className={styles['toogle-theme__slider']}>
                <input
                    type="checkbox"
                    className={styles['toogle-theme__input']}
                    checked={theme}
                    onChange={toogleTheme}
                />
                <span className={styles['toogle-theme__switch']}></span>
            </div>
        </div>
    )
}