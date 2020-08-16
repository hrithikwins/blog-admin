import  React, { createContext, useReducer } from 'react';
import { blogReducer } from '../reducers/BlogReducer';

export const BlogContext = createContext();

const BlogContextProvider = (props) => {

    const [blogs, dispatch] = useReducer(blogReducer, [])

    const sortedBlogs = blogs.sort((t, f) => (f.isChecked === t.isChecked) ? 0 : f.isChecked ? -1 : 1);

    return (
        <BlogContext.Provider value={{ blogs, sortedBlogs, dispatch }}>
            {props.children}
        </BlogContext.Provider>
    )
}
export default BlogContextProvider;