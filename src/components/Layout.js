import React from 'react';
import {makeStyles} from "@mui/styles";
import {Drawer} from "@mui/material";
import {Typography} from "@mui/material";

const drawerWidth = 240;

const useStyle = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth,

    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: "flex"
    }
});

function Layout({children}) {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant={'permanent'}
                anchor={'left'}
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant={'h5'}>
                        My Notes
                    </Typography>
                </div>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    );
}

export default Layout;