import styles from './template.module.css';
type Props = {
    children: React.ReactNode
}
export const Template = ({ children }: Props) => {
    return (
        <div className={styles.template}>
            {children}
        </div>
    )
}