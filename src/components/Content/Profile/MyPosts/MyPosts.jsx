import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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