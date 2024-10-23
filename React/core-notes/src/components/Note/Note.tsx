import { Note as NoteModel } from "../../interfaces/Note"
import styles from './note.module.css';
type Props = {
    note: NoteModel,
    removeNote: () => void;
}
export const Note = ({ note, removeNote }: Props) => {
    const { description, priority } = note;
    return (
        <div className={styles.note}>
            <span className={styles['note__description']}>{description} - <span className={styles['note__priority']}>{priority}</span></span>
            <button className={`${styles['note__btn']} btn`} onClick={removeNote}>Eliminar</button>
        </div>
    )
}