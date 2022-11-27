const Sidebar = ({ notes, addNote, deleteNote, activeNote, setActiveNote }) => {
  
    const sortedByLastModified = notes.sort((a, b) => {
        return b.lastModified - a.lastModified
    })
  
    return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>

        <button onClick={addNote}>Add</button>
      </div>

      <div className="app-sidebar-notes">
        {sortedByLastModified.map(({ id, title, text, lastModified }) => (
          <div
            key={id}
            className={`app-sidebar-note ${
              activeNote === id ? `active` : null
            }`}
            onClick={() => {
              setActiveNote(id);
            }}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>

              <button onClick={() => deleteNote(id)}>Delete</button>
            </div>

            <p>{text}</p>

            <small className="note-meta">
              Last modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
