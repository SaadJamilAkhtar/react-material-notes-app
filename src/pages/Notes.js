import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import {Paper} from "@mui/material";
import {Container} from "@mui/material";
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
        <Container>
            <Grid container>
                {notes && notes.map(note => {
                    return (
                        <Grid key={note.id} md={4} xs={12} sm={6}>
                            <Paper>{note.title}</Paper>
                        </Grid>
                    )
                })}
            </Grid>

        </Container>
    );
}

export default Notes;
