import React from 'react';
import {Container, Grid} from '@material-ui/core';
import HeaderBar from './HeaderBar/HeaderBar';
import DrawerBar from './DrawerBar/DrawerBar';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { Switch, Route} from "react-router-dom";
import { createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import CollectFeePage from '../HomePage/CollectFeePage/CollectFeePage';
import StudentPage from '../HomePage/StudentPage/StudentPage';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width:'100vw',
        backgroundColor: '#cfe8fc'
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: '60px',
        [theme.breakpoints.up('sm')]: {
          paddingLeft: '60px'
        }
      },
      contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden'
      },
      content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto'
      },
    mainDiv:{
        paddingTop: theme.spacing(12) + 'px',
        paddingLeft: theme.spacing(9) + 'px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

const theme = createMuiTheme({
    typography: {
        fontSize: 12,
    },
    overrides: {
        root: {
            MuiFormControlLabel: {
                label: {
                    width: '84%'
                },
            }
        }
    }
});

const HomePage = ({match}) =>{
    const classes = useStyles();
    return(
        <React.Fragment>
             <ThemeProvider theme={theme}>
               
                <Container className={classes.root} maxWidth={false}>
                <HeaderBar></HeaderBar>
                <Hidden only={'xs'}>
                    <DrawerBar match={match}></DrawerBar>
                </Hidden>
                <div className={classes.wrapper}>
                    <div className={classes.contentContainer}>
                        <div className={classes.content}>
                            <Switch>
                                <Route path={match.url + "/collect-fee"}  component={CollectFeePage}/>
                                <Route path={match.url + "/student"} component={StudentPage}/>
                            </Switch>
                        </div>
                    </div>
                </div>         
                </Container>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default HomePage;