import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Icon, InlineIcon } from '@iconify/react';
import handHoldingUsd from '@iconify-icons/fa-solid/hand-holding-usd';
import userGraduate from '@iconify-icons/fa-solid/user-graduate';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      overflow: 'none'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    drawerContainer: {
      overflow: 'none',
      paddingTop: '20px'
    },
    link: {
      textDecoration: 'none',
      color: 'black'
    }
  }));

  export default function DrawerBar({match}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);

      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

      return(
          <React.Fragment>
            <Drawer
              onMouseOver={handleDrawerOpen}
              onMouseOut={handleDrawerClose}
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              variant="permanent"
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
            >
              <Toolbar />
              <div className={classes.drawerContainer} >
                <List>
                  {['Collect Fee', 'Student', 'Send email', 'Drafts'].map((menu, index) => (
                    <Link to={match.url + (('Collect Fee' === menu) ? "/collect-fee" :"/student")} className={classes.link} key={menu}>
                      <ListItem button key={menu}>
                        <ListItemIcon>
                          {{
                            'Collect Fee' : <Icon icon={handHoldingUsd} color="#00ff00" width="48" height="48"/>,
                            'Student' : <Icon icon={userGraduate} color="#0000ff" width="48" height="48"/>
                          }[menu]}
                        </ListItemIcon>
                        <ListItemText primary={menu} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
                <Divider />
              </div>
            </Drawer>
          </React.Fragment>
      );
  }