import React from 'react';
import {Typography} from "@mui/material";

function Create(props) {
    return (
        <div>
            <Typography
                variant={'h4'}
                color={'textSecondary'}
                align={'center'}
                gutterBottom
            >
                Add A New Note
            </Typography>

        </div>
    );
}

export default Create;