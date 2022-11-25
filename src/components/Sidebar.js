
const Sidebar = ({notes, addNote, deleteNote, activeNote, setActiveNote}) => {

    return <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>

            <button onClick={addNote}>Add</button>

        </div>

        <div className="app-sidebar-notes">

            {notes.map(({id, title, text, lastModified}) => (
                <div key={id} className={`app-sidebar-note ${activeNote === id? `active` : null}`} onClick={() => {
                    setActiveNote(id);
                    }}>
                <div className="sidebar-note-title">
                    <strong>{title}</strong>
                    
                    <button onClick={() => deleteNote(id)}>Delete</button>
                </div>

                <p>{text}</p>

                <small className="note-meta">Last modified {/* lastModified.toDateString() */}</small>
            </div>
            ))}

        </div>
    </div>
}

export default Sidebar;