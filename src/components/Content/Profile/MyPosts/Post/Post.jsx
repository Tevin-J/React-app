import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
    <div className={style.post}>
        <img src='https://bibliojuris.com.br/wp-content/uploads/2018/06/myAvatar-1-300x300.png'/>
        {props.message}
        <div>
            <span>
                like
                {props.likesCount}
            </span>
        </div>
    </div>
    );
}

export default Post;