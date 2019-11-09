import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    let postData = [
        {id:'1', message:'Privet!', likesCount: 15},
        {id:'2', message: 'Kak dela?', likesCount: 12}
    ];

    let postsElements = postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;