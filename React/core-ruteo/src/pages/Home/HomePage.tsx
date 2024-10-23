import { NavLink } from "react-router-dom"
import styles from './homepage.module.css';
import { routes } from "../../constants/routes";

export const HomePage = () => {
    return (
        <div className={`page ${styles['home-page']}`}>
            <h1>Bienvenido a la Galería de Arte Futurista</h1>
            <div className={styles.container}>
                {
                    routes.map((text, index) => (
                        <NavLink to={`/art/${index + 1}`} className={styles.item} key={`navlink-${index}`}>{text}</NavLink>
                    ))
                }
            </div>
        </div>
    )
}