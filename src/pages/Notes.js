import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import {Paper} from "@mui/material";
import {Container} from "@mui/material";
import NoteCard from "../components/NoteCard";

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

    const del = async (id) => {
        const res = await fetch('http://localhost:5000/tasks/' + id, {
            method: "DELETE"
        })
        if (res.status === 200) {
            setNotes(notes.filter(note => note.id !== id))
        }
    }

    return (
        <Container>
            <Grid container spacing={3}>
                {notes && notes.map(note => {
                    return (
                        <Grid item key={note.id} md={4} xs={12} sm={6}>
                            <NoteCard note={note} onDelete={del}/>
                        </Grid>
                    )
                })}
            </Grid>

        </Container>
    );
}

export default Notes;
