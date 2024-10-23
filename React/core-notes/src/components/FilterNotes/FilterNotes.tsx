import { ChangeEvent } from "react";
import { PriorityNoteFilter } from "../../interfaces/PriorityNoteFilter"
import styles from './filterNotes.module.css';

type Props = {
    filterNote: PriorityNoteFilter;
    setFilterNote: React.Dispatch<React.SetStateAction<PriorityNoteFilter>>
}
export const FilterNotes = ({ filterNote, setFilterNote }: Props) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { target } = e;
        setFilterNote((target.value) as PriorityNoteFilter)
    }
    return (
        <select name="priorityFilter" value={filterNote} onChange={handleChange} className={styles['filter-notes']}>
            <option value="All">Todas</option>
            <option value="Low">Bajas</option>
            <option value="Middle">Medias</option>
            <option value="High">Altas</option>
        </select>
    )
}