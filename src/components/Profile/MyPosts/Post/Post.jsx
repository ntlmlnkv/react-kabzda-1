import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://cs8.pikabu.ru/post_img/2018/02/19/10/1519063089184624333.jpg"></img>
            {props.message}
            <div>
                <span>like</span>
                {props.like}
            </div>
        </div>
    )
}

export default Post;