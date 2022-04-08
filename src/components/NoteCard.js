import React from 'react';
import {Card, IconButton, Typography} from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {DeleteOutline} from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    dynamic: {
        border: (note) => {
            if(note.category === 'Work'){
                return '1px solid red'
            }
        }
    }
})

function NoteCard(props) {
    const classes = useStyle(props.note);

    return (
        <Card elevation={2} className={classes.dynamic}>
            <CardHeader
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