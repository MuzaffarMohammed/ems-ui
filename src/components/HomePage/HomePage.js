import React from 'react';
import {Container, Grid} from '@material-ui/core';
import HeaderBar from './HeaderBar/HeaderBar';
import DrawerBar from './DrawerBar/DrawerBar';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width:'100vw',
        backgroundColor: '#cfe8fc'
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

const HomePage = () =>{
    const classes = useStyles();

    return(
        <React.Fragment>
             <ThemeProvider theme={theme}>
               
                <Container className={classes.root} maxWidth={false}>
                <HeaderBar></HeaderBar>
                <Hidden only={'xs'}>
                    <DrawerBar></DrawerBar>
                </Hidden>
                <div className={classes.mainDiv}>
                <Paper elevation={3} className={classes.paper}> 
                    
                    <Grid 
                            container
                            justify="space-around"
                            alignItems="flex-end"
                        >
<p>CHeck</p>
                            </Grid>
                    </Paper>  
                </div>
                   

                        
                </Container>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default HomePage;