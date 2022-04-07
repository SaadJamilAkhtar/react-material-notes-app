import React from 'react';
import {makeStyles} from "@mui/styles";
import {Drawer} from "@mui/material";
import {Typography} from "@mui/material";
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import {ListItemText} from "@mui/material";
import {ListItemIcon} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {AddCircleOutline, SubjectOutlined} from "@mui/icons-material";
import {purple} from '@mui/material/colors'
import {useLocation} from "react-router-dom";

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
    },
    drawerTitle: {
        paddingTop: '2rem',
        paddingBottom: '2rem'
    }
});

function Layout({children}) {
    const classes = useStyle()
    const navigate = useNavigate()
    const location = useLocation();

    const menuItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color={'secondary'}/>,
            iconWhite: <SubjectOutlined style={{color: 'white'}}/>,
            path: '/'
        },
        {
            text: "Create Notes",
            icon: <AddCircleOutline color={'secondary'}/>,
            iconWhite: <AddCircleOutline style={{color: 'white'}}/>,
            path: '/add'
        }
    ]

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant={'permanent'}
                anchor={'left'}
                classes={{paper: classes.drawerPaper}}
            >
                <div className={classes.drawerTitle}>
                    <Typography variant={'h5'} align={'center'}>
                        My Notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map(item => (
                        <ListItem
                            key={item.text}
                            button
                            onClick={() => {
                                navigate(item.path)
                            }}
                            style={location.pathname === item.path ? {
                                background: '#D500F9',
                                color: "white",
                                borderRadius: '1rem',
                            } : null}
                        >

                            <ListItemIcon>{location.pathname === item.path ? item.iconWhite : item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>

                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    );
}

export default Layout;