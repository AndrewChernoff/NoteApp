const Main = ({mainNote, updateNote}) => {

    const editNote = (key, value) => {
        updateNote({
            ...mainNote,
            [key]: value, 
            lastModified: Date.now()
        })
    }

    if (!mainNote) return <div className="no-active-note">No notes selected</div>

    return <div className="app-main">

        <div className="app-main-note-edit" id={mainNote.id}>
            <input type="text" onChange={(e) => editNote('title', e.target.value)} value={mainNote.title} id="title" autoFocus/>

            <textarea id="body" onChange={(e) => editNote('text', e.target.value)} value={mainNote.text} placeholder="Write your note here..." type="text"/>
        </div>

        <div className="app-main-note-preview">
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">note preview</div>
        </div>

    </div>
}

export default Main;