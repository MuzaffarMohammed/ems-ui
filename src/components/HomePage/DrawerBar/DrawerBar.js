import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Icon, InlineIcon } from '@iconify/react';
import handHoldingUsd from '@iconify-icons/fa-solid/hand-holding-usd';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
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
    }
  }));

  export default function DrawerBar() {
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
                <Divider />
                  {['Collect Fee', 'Starred', 'Send email', 'Drafts'].map((menu, index) => (
                    <ListItem button key={menu}>
                      <ListItemIcon>
                      {{
                        'Collect Fee' : <Icon icon={handHoldingUsd} color="#00ff00" width="48" height="48" />,
                        Starred : <MailIcon />
                      }[menu]}

                      </ListItemIcon>
                      <ListItemText primary={menu} />
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </div>
            </Drawer>
          </React.Fragment>
      );
  }