import React from 'react';
import { BrowserRouter,Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = (props) => {
    let dialogs = [{ id: 1, name: 'Alex' },
    { id: 2, name: 'Sasha' }, { id: 3, name: 'Vasya' },
    { id: 4, name: 'Nomad' }, { id: 5, name: 'Andrey' }]

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className={'app-wrapper-content'}>
                    <Route path = "/dialogs" render={ () =>  <Dialogs /> } />
                    <Route path = "/profile" render={ () =>  <Profile/> } />
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;