import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'
import {AddBlogComponent} from './AddBlogComponent';
import {BlogListComponent} from './BlogsListComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: '#f5f5f5'
    },

}));

const TodoListComponent = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AddBlogComponent></AddBlogComponent>
                </Grid>
                <Grid item xs={12}>
                    <BlogListComponent></BlogListComponent>
                </Grid>
            </Grid>
        </div>
    );
}

export default TodoListComponent;