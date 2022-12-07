import React from "react";
import s from './Navbar.module.css';
console.log(s);

// let s = {
//     'nav': 'Navbart_nav__3ou0Q',
//     'item': 'Navbart_item__3qaF3',
//      'active': 'Bakshdakdn_active'
// }

// let c1="item";
// let c2="active";
// //"item active"
// let classes = c1 + " "+c2;
// let classesNew = `${s.item} + ${s.active}`;


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a> Profile</a>
        </div>
        <div className={`${s.item} + ${s.active}`}>
            <a> Message</a>
        </div>
        <div className={s.item}>
            <a> News</a>
        </div>
        <div className={s.item}>
            <a> Music</a>
        </div>
        <div className={s.item}>
            <a> Settings</a>
        </div>
    </nav>
}
export default Navbar;