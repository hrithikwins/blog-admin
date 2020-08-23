import React, { createContext, useReducer, useEffect, useState } from 'react';
import { blogReducer, Action } from '../reducers/BlogReducer';
import {
    getBlogsRequest,
    addBlogRequest
} from '../firebase/Firebase';

export const BlogContext = createContext();

const BlogContextProvider = (props) => {


    const [blogs, dispatch] = useReducer(blogReducer, [])
    const [sortedBlogs, setBlogs] = useState([]);

    const count = sortedBlogs.length;
    useEffect(() => {
        getBlogsRequest().then(res => {
            setBlogs(res.sort((t, f) => (f.isChecked === t.isChecked) ? 0 : f.isChecked ? -1 : 1))
            dispatch({
                type: Action.GET_ALL_TASKS,
                res
            })
        })
    }, [])
    return (
        <BlogContext.Provider value={{ count, sortedBlogs, dispatch, addBlogRequest }}>
            {props.children}
        </BlogContext.Provider>
    )
}
export default BlogContextProvider;