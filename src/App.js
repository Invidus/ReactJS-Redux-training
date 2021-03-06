import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Route path="/" render={() => <Navbar/>} />
                <div className={'app-wrapper-content'}>
                   
                    <Route path="/dialogs" 
                    render={ () => <DialogsContainer />} />
                   
                    <Route path="/profile" 
                    render={ () => <Profile />} />
                    <Route path="/users" 
                    render={ () => <UsersContainer/>} />
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;