import { useState } from 'react';
import styles from './card.module.css';
type Props = {
    title: string;
    price: number;
    description: string;
    initialStock: number;
}
export const Card = ({ title, price, description, initialStock }: Props) => {
    const [stock, setStock] = useState<number>(initialStock);
    const handleClick = () => {
        setStock(stock - 1);
    }
    return (
        <div className={styles.card}>
            <span className={styles['card__title']}>{title}</span>
            <span className={styles['card__price']}>${price}</span>
            <p className={styles['card__description']}>{description}</p>
            {
                stock ? 
                (<span className={styles['card__stock--available']}>En Stock: {stock}</span>)
                :
                (<span className={styles['card__stock--unavailable']}>Agotado</span>)
            }
            <button className={`btn ${styles['card__btn']}`} onClick={handleClick} disabled={!stock}>Comprar</button>
        </div>
    )
}