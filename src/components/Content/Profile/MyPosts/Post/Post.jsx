import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
    <div className={style.post}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Kj6cPQDCYYnGSFWl729oSTFLzKA2WWQII5Mzj_eYAwB88T_E&s'/>
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