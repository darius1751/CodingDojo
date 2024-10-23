import { useState } from 'react'
import { NoteForm } from './components/NoteForm/NoteForm'
import { Note as NoteModel } from './interfaces/Note';
import { Note } from './components/Note/Note';
import { PriorityNoteFilter } from './interfaces/PriorityNoteFilter';
import { FilterNotes } from './components/FilterNotes/FilterNotes';
import { ToogleTheme } from './components/ToogleTheme/ToogleTheme';
import './App.css'

export const App = () => {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [filterNotes, setFilterNotes] = useState<PriorityNoteFilter>('All');
  const removeNote = (noteId: string) => {
    const newNotes = notes.filter(({ id }) => id !== noteId);
    setNotes(newNotes);
  }
  return (
    <div className='page'>
      <ToogleTheme />
      <div className='container'>
        <h1>Notas</h1>
        <NoteForm notes={notes} setNotes={setNotes} />
        <FilterNotes filterNote={filterNotes} setFilterNote={setFilterNotes} />
        <div className='notes'>
          {
            filterNotes === 'All' ?
              notes.map((note, index) => <Note key={`note-${index}`} note={note} removeNote={() => { removeNote(note.id) }} />)
              :
              notes.filter((note) => note.priority === filterNotes)
                .map((note, index) => <Note key={`note-${index}`} note={note} removeNote={() => { removeNote(note.id) }} />)
          }
        </div>

      </div>
    </div>
  )
}
