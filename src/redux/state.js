import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi', likes: 4 },
            { id: 2, message: 'how are you?', likes: 6 },
        ]
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

export let addPost = (postMessage) =>{ //Add new post in Profile->Posts
    let newPost = {
        id: 5,
        message: postMessage,
        likes:0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;