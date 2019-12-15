import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import PropTypes from 'prop-types';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";



const MyPosts = (props) => {

    let postsElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;

MyPosts.propTypes = {
    postData: PropTypes.array,
    newPostText: PropTypes.string
}