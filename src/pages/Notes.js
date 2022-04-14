import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import {Container} from "@mui/material";
import NoteCard from "../components/NoteCard";
import Masonry from 'react-masonry-css';
import {motion} from "framer-motion";

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

    const breakPoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <motion.div layoutTransition transition={{delay: 1}}>
            <Container>
                <Masonry
                    breakpointCols={breakPoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {notes && notes.map(note => {
                        return (
                            <motion.div key={note.id} layoutTransition transition={{delay: 1}}>
                                <NoteCard note={note} onDelete={del}/>
                            </motion.div>
                        )
                    })}
                </Masonry>

            </Container>
        </motion.div>
    );
}

export default Notes;
