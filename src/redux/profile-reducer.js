const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi', likes: 4 },
        { id: 2, message: 'how are you?', likes: 6 },
    ],
    newPostText: 'new post text'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
            return { 
                ...state,
                newPostText: "",
                posts: [...state.posts,newPost]

            };
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);


        }
        case UPDATE_NEW_POST_TEXT: {
            
            return {
                ...state,
                newPostText: action.newText
            }
            // stateCopy.newPostText = action.newText;

        }
       default: return state;
    
}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export default profileReducer