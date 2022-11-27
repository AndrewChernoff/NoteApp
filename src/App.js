import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));

  }, [notes])
  

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: 'Title',
      text: '',
      lastModified: new Date()
    }

    setNotes([...notes, newNote])
  }

  const deleteNote = (noteId) => {
    setNotes(notes => notes.filter(note => note.id !== noteId))
  }

  const findActiveNote = (id) => {
    return notes.find(note => note.id === id);
  }

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map(note => {
      if(note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    })

    setNotes(updatedNotes)
  }

  return (
    <div className="App">
      <Sidebar notes={notes} addNote={addNote} deleteNote={deleteNote}
      activeNote={activeNote} setActiveNote={setActiveNote}
      />
      <Main mainNote={findActiveNote(activeNote)} updateNote={updateNote}/>
    </div>
  );
}

export default App;
