import * as React from 'react';
import {Note} from '../models/note.model'
import Notes from './Notes';
interface INotesListProps {
    notes : Note[],
    setNotes :  React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({notes,setNotes}) => {
    const handleDelete = (id : string)=>{
        const res = notes.filter(note => note.id !== id)
        setNotes(res)
    }
    const renderNotes = () : JSX.Element[]=>{
        return notes.map(note => {
           return  <Notes key={note.id} note={note} handleDelete={handleDelete}/>
        })
    }
  return (
    <div>
        <h2 className='mt-3'>Notes</h2>
        <div> { renderNotes() } </div>
    </div>
  );
};

export default NotesList;
