import React from 'react';
import {makeStyles} from "@mui/styles";

const useStyle = makeStyles({
    page:{
        background: '#f9f9f9',
        width: '100%'
    }
});

function Layout({children}) {
    const classes = useStyle()

    return (
        <div>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    );
}

export default Layout;