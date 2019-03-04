
let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi', likes: 4 },
            { id: 2, message: 'how are you?', likes: 6 },
        ],
        newPostText:'nowi text'
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
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Alexey'},
        ]
    }
}

export const addPost = () =>{ //Add new post in Profile->Posts
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes:0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) =>{ //updating text'a in textarea
// traiding with ul -> bll -> ul  
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
        
    };
export const subscribe = (observer) => {
    rerenderEntireTree = observer; // Наблюдатель !почитать!
}


export default state;