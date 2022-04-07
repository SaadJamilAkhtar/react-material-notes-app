import React, {useState} from 'react';
import {Button, Typography} from "@mui/material";
import {Container} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import {makeStyles} from '@mui/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
    field: {
        "&&": {
            marginTop: 20,
            marginBottom: 20,
        }
    },
    text: {
        background: 'white',
    }
});

function Create(props) {

    const classes = useStyles(props);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        details: "",
        category: "ToDo"
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


    const submit = async (e) => {
        e.preventDefault();
        setError({
            title: {
                val: !formData.title,
                text: !formData.title ? 'Please fill this field' : ''
            },
            details: {
                val: !formData.details,
                text: !formData.details ? 'Please fill this field' : ''
            }
        })
        if (!formData.title || !formData.details) {
            return
        }

        await fetch('http://localhost:5000/tasks', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(formData)
        })

        navigate("/")

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
                    className={`${classes.field} ${classes.text}`}
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
                    className={`${classes.field} ${classes.text}`}
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
                <FormControl className={classes.field}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup
                        value={formData.category}
                        onChange={change}
                        name={'category'}
                    >
                        <FormControlLabel control={<Radio/>} label={'To Do'} value={'ToDo'}/>
                        <FormControlLabel control={<Radio/>} label={'Reminder'} value={'Reminder'}/>
                        <FormControlLabel control={<Radio/>} label={'Work'} value={'Work'}/>
                        <FormControlLabel control={<Radio/>} label={'Other'} value={'Other'}/>
                    </RadioGroup>
                </FormControl>
                <br/>
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