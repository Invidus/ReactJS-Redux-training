import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/profile' activeClassName ={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName ={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='index.js' activeClassName = {style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='index.js' activeClassName = {style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='index.js' activeClassName = {style.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;