// List of Actions being performed
export const Action = {
    CREATE_BLOG: "create-blog",
    // CHECK_BLOG: "check-blog",
    REMOVE_BLOG: "remove-blog",
    UPDATE_BLOG: "update-blog"
}

export const blogReducer = (state, action) => {
    switch (action.type) {
        case Action.CREATE_BLOG: {
            return [...state, action.blog]
        }
        // case Action.CHECK_blog:
        //     let blogIndex = state.findIndex(t => t.id === action.blog.id);
        //     state[blogIndex].isChecked = action.blog.isChecked
        //     return state.filter(blog => blog.id !== action.id);

        case Action.REMOVE_BLOG: {
            return state.filter(blog => blog.id !== action.id)
        }

        case Action.UPDATE_BLOG: {
            return state.filter(blog => blog.id !== action.id)
        }
        default:
            return state;
    }
}