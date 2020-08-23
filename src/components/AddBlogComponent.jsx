import React, { useContext, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import { TextField, Button, MenuItem, Select } from '@material-ui/core';
import { BlogContext } from '../contexts/BlogContext';
import { Action } from '../reducers/BlogReducer';
import { v4 as uuidv4 } from 'uuid';

export const AddBlogComponent = () => {

    const { dispatch } = useContext(BlogContext);
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [writer, setWriter] = useState('');
    const [category, setCategory] = useState(' ');

    const onAddBlog = (e) => {
        e.preventDefault();
        dispatch({
            type: Action.CREATE_BLOG,
            blog: {
                id: uuidv4(),
                isChecked: false,
                created: new Date(),
                topic: topic,
                content: content,
                writer: writer,
                category: category

            }
        });
        setTopic('')
        setContent('')
        setWriter('')
        setCategory(' ')

    }
    return (
        <form onSubmit={onAddBlog}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">

                <TextField
                    label="Topic"
                    variant="standard"
                    size="small"
                    value={topic}
                    onChange={
                        (e) => {
                            setTopic(e.target.value)
                        }
                    }
                /><br/>
                <TextField
                    label="Content"
                    variant="standard"
                    size="small"
                    multiline
                    value={content}
                    onChange={
                        (e) => {
                            setContent(e.target.value)
                        }
                    }
                /><br/>
                <TextField
                    label="Writer Name"
                    variant="standard"
                    size="small"
                    value={writer}
                    onChange={
                        (e) => {
                            setWriter(e.target.value)
                        }
                    }
                /><br/><Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    // placeholder="Select Category"
                    onChange={
                        (e) => {
                            setCategory(e.target.value)
                        }
                    }
                >
                    <MenuItem value={" "}>Select Category</MenuItem>
                    <MenuItem value={"Thoughts"}>Thoughts</MenuItem>
                    <MenuItem value={"Shayaris"}>Shayaris</MenuItem>
                    <MenuItem value={"Quotes"}>Quotes</MenuItem>
                    <MenuItem value={"Lyrics"}>Lyrics</MenuItem>
                    <MenuItem value={"Poems"}>Poems</MenuItem>
                </Select>
                <br></br>
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    
                >
                    ADD THIS BLOG
                </Button>


            </Grid>
        </form>
    );
}
