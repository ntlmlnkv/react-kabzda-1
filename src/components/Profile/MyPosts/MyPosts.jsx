import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let PostsData = [
        { id: 1, likesCount: 5, message: 'Hi, how are you?' },
        { id: 2, like: 10, message: "It's my first post" }
    ]
    return (<div className={s.postsBlock}>
        <h3> My posts </h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add posts</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post like={PostsData[0].like} message={PostsData[0].message} />
            <Post like={PostsData[1].like} message={PostsData[1].message} />
        </div>
    </div >
    )
}

export default MyPosts;