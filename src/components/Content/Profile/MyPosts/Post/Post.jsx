import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import like from '../../../../../assets/images/like.svg'

const Post = (props) => {
    return (
    <div className={style.post}>
        <div className={style.avatar}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Kj6cPQDCYYnGSFWl729oSTFLzKA2WWQII5Mzj_eYAwB88T_E&s'/>
        </div>
        <div className={style.postText}>
            {props.message}
        </div>
        <div className={style.likeBlock}>
            <img src={like}/>
            {props.likesCount}
        </div>
    </div>
    );
}

export default Post;

Post.propTypes = {
    likesCount: PropTypes.number,
    message: PropTypes.string
}
