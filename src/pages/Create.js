import React, {useState} from 'react';
import {Button, Typography} from "@mui/material";
import {Container} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    field: {
        "&&": {
            marginTop: 20,
            marginBottom: 20
        }
    },
});

function Create(props) {

    const classes = useStyles(props);
    const [formData, setFormData] = useState({
        title: "",
        details: ""
    });

    const [error, setError] = useState({
        title: {
            val: false,
            text: ''
        },
        details: {
            val: false,
            text: ''
        }
    });


    const submit = (e) => {
        e.preventDefault();
        setError({
            title: {
                val: !formData.title,
                text: !formData.title?'Please fill this field':''
            },
            details: {
                val:!formData.details,
                text:!formData.details?'Please fill this field':''
            }
        })

        console.log(error)

    }

    const change = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
            <form onSubmit={submit}>
                <TextField
                    className={classes.field}
                    label={"Note Title"}
                    name={'title'}
                    value={formData.title}
                    fullWidth
                    required
                    onChange={change}
                    error={error.title.val}
                    helperText={error.title.text}
                />
                <TextField
                    className={classes.field}
                    label={"Details"}
                    name={'details'}
                    value={formData.details}
                    multiline
                    rows={4}
                    fullWidth
                    required
                    onChange={change}
                    error={error.details.val}
                    helperText={error.details.text}
                />
                <Button
                    onClick={submit}
                    type={'submit'}
                    variant={'contained'}
                    color={'secondary'}
                    startIcon={<AddCircleIcon/>}
                >
                    Add Task
                </Button>
            </form>

        </Container>
    );
}

export default Create;