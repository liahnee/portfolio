import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


function useStyles (props) {
    
    return makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },


  }));


export default ({ title, githubLink, img, backgroundcolor = 'none', summary, skills, ...props}) => {
	const classes = useStyles();

}