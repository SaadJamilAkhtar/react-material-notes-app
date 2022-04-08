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
import {useLocation} from "react-router-dom";
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import {format} from "date-fns";
import {Avatar} from "@mui/material";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),
            minHeight: '92vh'
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
            padding: theme.spacing(2)
        },
        appbar: {
            '&&': {
                width: `calc(100% - ${drawerWidth}px)`,
            }
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
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
            <AppBar className={classes.appbar} color={'grey'} elevation={0}>
                <Toolbar>
                    <Typography variant={'p1'} className={classes.date}>{format(new Date(), 'do MMMM Y')}</Typography>
                    <Typography variant={'p1'}>Mario</Typography>
                    <Avatar src={'./avatar.png'} className={classes.avatar}/>
                </Toolbar>
            </AppBar>
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
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    );
}

export default Layout;