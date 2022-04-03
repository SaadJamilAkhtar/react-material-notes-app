import React from 'react';
import {Button, Typography} from "@mui/material";
import {Container} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Create(props) {

    const submit = () => {

    }

    return (
        <Container>
            <Typography
                variant={'h4'}
                color={'textSecondary'}
                gutterBottom
            >
                Add A New Note
            </Typography>
            <Button
                onClick={submit}
                type={'submit'}
                variant={'contained'}
                color={'secondary'}
                startIcon={<AddCircleIcon/>}
            >
                Add Task
            </Button>

        </Container>
    );
}

export default Create;