const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'; // Используем конст. дабы не ошибаться в нейминге
let store = {
    _callSubscriber() {
        console.log('State changed');
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likes: 4 },
                { id: 2, message: 'how are you?', likes: 6 },
            ],
            newPostText: 'new post text'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Whaaat?' }, { id: 3, message: 'where are you?' },
                { id: 4, message: 'Google' }, { id: 5, message: 'Playing with dog' }
            ],
            dialogs: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Sasha' }, { id: 3, name: 'Vasya' },
                { id: 4, name: 'Nomad' }, { id: 5, name: 'Andrey' }
            ],
            newMessageBody: ""
        },
        sideBar: {
            friends: [
                { id: 1, name: 'Sasha' },
                { id: 2, name: 'Masha' },
                { id: 3, name: 'Alexey' },
            ]
        }
    },


    dispatch(action) {// объект {type: 'ADD-POST'}
<<<<<<< HEAD:src/redux/store.js
    this._state.profilePage = profileReducer(this._state.profilePage,action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage,action);
    this._callSubscriber(this._state);      //Уведомление 
=======
        if (action.type === ADD_POST) {
            //Add new post in Profile->Posts
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            // traiding with ul -> bll -> ul  
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type == SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
>>>>>>> parent of a6ff086... Add reducers and some refactoring:src/redux/state.js
    },

    subscribe(observer) {
        this._callSubscriber = observer; // Наблюдатель !почитать!
    },
    getState() {
        return this._state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })




// let rerenderEntireTree = () => {
//     console.log('State changed');
// }

// let state = {
//     profilePage: {
//         posts: [
//             { id: 1, message: 'Hi', likes: 4 },
//             { id: 2, message: 'how are you?', likes: 6 },
//         ],
//         newPostText:'nowi text'
//     },
//     dialogsPage: {
//         messages: [
//             { id: 1, message: 'Hi' },
//             { id: 2, message: 'Whaaat?' }, { id: 3, message: 'where are you?' },
//             { id: 4, message: 'Google' }, { id: 5, message: 'Playing with dog' }
//         ],
//         dialogs: [
//             { id: 1, name: 'Alex' },
//             { id: 2, name: 'Sasha' }, { id: 3, name: 'Vasya' },
//             { id: 4, name: 'Nomad' }, { id: 5, name: 'Andrey' }
//         ],
//     },
//     sideBar: {
//         friends: [
//             {id: 1, name: 'Sasha'},
//             {id: 2, name: 'Masha'},
//             {id: 3, name: 'Alexey'},
//         ]
//     }
// }

// export const addPost = () =>{ //Add new post in Profile->Posts
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likes:0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) =>{ //updating text'a in textarea
// // traiding with ul -> bll -> ul  
//         state.profilePage.newPostText = newText;
//         rerenderEntireTree(state);

//     };
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer; // Наблюдатель !почитать!
// }


export default store;
window.store = store; // для глобального обращения