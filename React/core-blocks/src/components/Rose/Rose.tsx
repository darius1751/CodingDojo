import styles from './rose.module.css';
type Props = {
    children: React.ReactNode
}
export const Rose = ({ children }: Props) => {
    return (
        <div className={styles.rose}>
            {children}
        </div>
    )
}