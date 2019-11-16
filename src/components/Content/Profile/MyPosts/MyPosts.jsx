import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import PropTypes from 'prop-types';


const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newPostText: text};
        props.dispatch(action);
    }

    let postsElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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