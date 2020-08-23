import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlineIcon from '@material-ui/icons/EditOutlined';

import { BlogContext } from '../contexts/BlogContext';
import { Action } from '../reducers/BlogReducer';
import { Grid, Typography, Container, Chip } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.transparent,
    },
    marked: {
        background: '#888',
        boxShadow: ' 2px 2px 2px black',
        borderRadius: '5px'
    }
}));



export const BlogListComponent = () => {

    const {
        sortedBlogs,
        dispatch,
    } = useContext(BlogContext)

    const date = new Date();

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
                        <Grid
                        >
                            <Grid col-md-12>
                                <Container className={blog.isChecked ? classes.marked : ''}>
                                    <hr />
                                    <Typography
                                        variant="h4"
                                    >

                                        {blog.topic}
                                        <Chip size="small" label={blog.category} color="primary" />
                                    </Typography>
                                    <Typography
                                        variant="small"
                                    >
                                        Posted on {blog.created.getDate() + '/'}{blog.created.getMonth() + 1}{'/' + blog.created.getFullYear()} by {blog.writer}
                                    </Typography>
                                    <br />
                                    <Typography
                                        variant="p"
                                    >
                                        <pre>

                                            {blog.content}
                                        </pre>
                                    </Typography>
                                    <br />
                                    <IconButton
                                        edge="end"
                                        aria-label="comments"
                                        onClick={() => {
                                            dispatch({
                                                type: Action.REMOVE_BLOG,
                                                id: blog.id
                                            })
                                        }}>
                                        <EditOutlineIcon />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="comments"
                                        onClick={() => {
                                            dispatch({
                                                type: Action.REMOVE_BLOG,
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