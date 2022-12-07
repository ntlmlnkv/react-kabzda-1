import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (<div className={s.content}>
        <div>
            <img src='https://bstatic.com/data/xphoto/1182x887/202/20233869.jpg?size=S'></img>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts />
    </div>
    )
}

export default Profile;