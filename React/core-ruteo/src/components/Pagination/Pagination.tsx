import { NavLink } from "react-router-dom"
import styles from './pagination.module.css';
type Props = {
    home: string;
    next?: string;
    previouse?: string;
}
export const Pagination = ({ home, next, previouse }: Props) => {

    return (
        <div className={styles.pagination}>

            {
                previouse && <NavLink to={previouse!} className={styles.btn}>
                    Anterior
                </NavLink>
            }
            <NavLink to={home} className={styles.btn}>
                Inicio
            </NavLink>
            {
                next && <NavLink to={next!} className={styles.btn}>
                    Siguiente
                </NavLink>
            }
        </div>
    )
}