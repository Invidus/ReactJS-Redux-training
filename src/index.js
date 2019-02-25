import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message:'Hi', likes: 4},
    {id: 2, message:'how are you?', likes: 6},
]
let dialogs = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Sasha' }, { id: 3, name: 'Vasya' },
    { id: 4, name: 'Nomad' }, { id: 5, name: 'Andrey' }
]
let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Whaaat?' }, { id: 3, message: 'where are you?' },
    { id: 4, message: 'Google' }, { id: 5, message: 'Playing with dog' }
]



ReactDOM.render(<App posts = {posts} dialogs = {dialogs} messages = {messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
