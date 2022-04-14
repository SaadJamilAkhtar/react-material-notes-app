import React from 'react';
import {Card, IconButton, Typography} from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {DeleteOutline} from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import {makeStyles} from "@mui/styles";
import {Avatar} from "@mui/material";
import {blue, green, pink, yellow} from "@mui/material/colors";
import {motion} from "framer-motion";

const useStyle = makeStyles({
    dynamic: {
        border: (note) => {
            if (note.category === 'Work') {
                return '1px solid red'
            }
        }
    },
    avatar: {
        '&&': {
            background: (note) => {
                if (note.category == 'Work') {
                    return pink[700]
                }
                if (note.category == 'ToDo') {
                    return green[500]
                }
                if (note.category == 'Other') {
                    return yellow[500]
                }
                return blue[500]

            }
        }
    }
})

function NoteCard(props) {
    const classes = useStyle(props.note);

    return (
            <Card elevation={2}>
                <CardHeader
                    avatar={<Avatar className={classes.avatar}>
                        {props.note.category[0].toUpperCase()}
                    </Avatar>}
                    title={props.note.title}
                    action={
                        <IconButton onClick={() => props.onDelete(props.note.id)}>
                            <CloseIcon
                                style={
                                    {
                                        color: 'white',
                                        background: 'red',
                                        padding: '0.25rem',
                                        borderRadius: '2rem'
                                    }
                                }/>
                        </IconButton>
                    }
                    subheader={props.note.category}
                />
                <CardContent>
                    <Typography variant={"body2"} color={"textSecondary"}>{props.note.details}</Typography>
                </CardContent>
            </Card>
    );
}

export default NoteCard;