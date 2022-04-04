import React, {useEffect, useState} from 'react';

function Notes(props) {

    const [notes, setNotes] = useState(null);

    const getTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        setNotes(data)
    }

    useEffect(() => {
        getTasks()
    }, [])


    return (
        <div>
            {notes && notes.map(note => {
                return (
                    <div key={note.id}>{note.title}</div>
                )
            })}
        </div>
    );
}

export default Notes;
