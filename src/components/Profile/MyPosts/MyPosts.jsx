import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add posts</button>
        </div>
        <div className={s.posts}>
            <Post like=' 5' message='Hi, how are you?'/>
            <Post like=' 10' message="It's my first post"/>
        </div>
    </div >
    )
}

export default MyPosts;