import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
    <div className={style.post}>
        <div className={style.avatar}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Kj6cPQDCYYnGSFWl729oSTFLzKA2WWQII5Mzj_eYAwB88T_E&s'/>
        </div>
        <div className={style.postText}>
            {props.message}
        </div>
        <div className={style.like}>
            <img src="https://clipart.info/images/ccovers/1513313791facebook-circle-heart-love-png.png"/>
            {props.likesCount}
        </div>
    </div>
    );
}

export default Post;