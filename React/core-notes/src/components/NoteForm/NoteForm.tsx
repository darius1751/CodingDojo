import { FormEvent } from "react"
import { useForm } from "../../hooks/useForm"
import { Note } from "../../interfaces/Note"
import styles from './noteForm.module.css';
type Props = {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
}
const initialNote: Note = {
    id: '',
    description: '',
    priority: 'Low'
}
export const NoteForm = ({ setNotes, notes }: Props) => {
    const { state, handleChange } = useForm(initialNote);
    const { description, priority } = state;
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNotes([...notes, { ...state, id: Date.now().toString() }]);
    }
    return (
        <form onSubmit={handleSubmit} className={styles['note-form']}>
            <input
                type="text"
                placeholder="Escribe tu nota"
                value={description}
                onChange={handleChange}
                name="description"
                className={styles['note-form__description']}
                required
            />
            <select
                name="priority"
                onChange={handleChange}
                value={priority}
                className={styles['note-form__priority']}
                required
            >
                <option value="Low">Baja</option>
                <option value="Middle">Media</option>
                <option value="High">Alta</option>
            </select>
            <input type="submit" value={'Agregar Nota'} className={`${styles['note-form__btn']} btn`} />
        </form>
    )
}