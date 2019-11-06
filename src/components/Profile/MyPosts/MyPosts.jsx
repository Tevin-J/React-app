import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    let messageData = [
        {id:'1', message:'Privet!', likesCount: 15},
        {id:'2', message: 'Kak dela?', likesCount: 12}
    ];
    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            <Post message={messageData[0].message} likesCount={messageData[0].likesCount}/>
            <Post message={messageData[1].message} likesCount={messageData[1].likesCount}/>
        </div>
    );
}

export default MyPosts;