import React from 'react';
import {Card, IconButton, Typography} from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {DeleteOutline} from "@mui/icons-material";


function NoteCard(props) {


    return (
        <Card elevation={2}>
            <CardHeader
                title={props.note.title}
                action={
                    <IconButton onClick={() => props.onDelete(props.note.id)} >
                        <DeleteOutline/>
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