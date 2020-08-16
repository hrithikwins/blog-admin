import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CropFreeIcon from '@material-ui/icons/CropFree';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

import { BlogContext } from '../contexts/BlogContext';
import { Action } from '../reducers/BlogReducer';
import { Grid, GridList, Typography, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.transparent,
    },
    marked: {
        background: '#888',
        boxShadow : ' 2px 2px 2px black',
        borderRadius: '5px'
    }
}));




export const BlogListComponent = () => {

    const {
        sortedBlogs,
        dispatch,
    } = useContext(BlogContext)

    const classes = useStyles();

    const onChecked = (id, isChecked) => {
        dispatch({
            type: Action.CHECK_TASK,
            blog: {
                id,
                isChecked
            }
        })
    }
    return (
        <List className={classes.root}>
            {sortedBlogs.map((blog) => {
                return (
                    <Container key={blog.id}
                        dense
                        button
                        onClick={() => {
                            onChecked(blog.id, !blog.isChecked)
                        }
                        }>
                        <Grid col-md-12>
                            <Grid col-md-12>
                                <Container className={blog.isChecked ? classes.marked : ''}>
                                    <Typography
                                        variant="h1"
                                    >
                                        
                                         {blog.description}
                                        </Typography>
                                        <Typography
                                        variant="h6"
                                        >
                                            blog.date
                                        </Typography>
                                    <Typography
                                        variant="p"
                                    >
                                        Class Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ratione ab unde repellat exercitationem quo quas temporibus illo fugiat ut modi animi ex inventore porro, reiciendis at, iusto tenetur totam, architecto odit.
                                        </Typography>
                                    <IconButton
                                        edge="end"
                                        aria-label="comments"
                                        onClick={() => {
                                            dispatch({
                                                type: Action.REMOVE_TASK,
                                                id: blog.id
                                            })
                                        }}>
                                        <DeleteOutlineIcon />
                                    </IconButton>
                                </Container>
                            </Grid>
                        </Grid>
                    </Container>
                );
            })}
        </List>
    );
}