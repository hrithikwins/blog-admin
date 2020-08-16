import React, { useContext, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { BlogContext } from '../contexts/BlogContext';
import { Action } from '../reducers/BlogReducer';
import { v4 as uuidv4 } from 'uuid';

export const AddBlogComponent = () => {

    const { dispatch } = useContext(BlogContext);
    const [description, setDescription] = useState('');

    const onAddBlog = (e) => {

        e.preventDefault();

        dispatch({
            type: Action.ADD_TASK,
            blog: {
                id: uuidv4(),
                isChecked: false,
                created: new Date(),
                description: description
            }
        });
        setDescription('')
    }
    return (
        <form onSubmit={onAddBlog}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">

                <TextField
                    label="Add Blog"
                    variant="outlined"
                    size="small"
                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                />
                <TextField
                    label="Add Blog"
                    variant="outlined"
                    size="small"
                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                />
                <TextField
                    label="Add Blog"
                    variant="outlined"
                    size="small"
                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                />
                <TextField
                    label="Add Blog"
                    variant="outlined"
                    size="small"
                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                />
                <TextField
                    label="Add Blog"
                    variant="outlined"
                    size="small"
                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                />
                <TextField
                    label="Add Blog"
                    variant="outlined"
                    size="small"
                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                />
                <TextField
                    label="Add Blog"
                    variant="outlined"
                    size="small"
                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }
                />


            </Grid>
        </form>
    );
}
