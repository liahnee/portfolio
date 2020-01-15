import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export default (props) => {
    const classes = useStyles();

    const handleChange = () => {
        // anchor 
    }

    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2}>
                <Grid item>
                    list of projects, sticky, anchor
                </Grid>
                <Grid item>
                    map items with summary components 
                </Grid>
            </Grid>
        </React.Fragment>
    )
};