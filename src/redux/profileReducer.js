const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi', likes: 4 },
        { id: 2, message: 'how are you?', likes: 6 },
    ],
    newPostText: 'new post text'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            //Add new post in Profile->Posts
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            // traiding with ul -> bll -> ul  
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export default profileReducer;