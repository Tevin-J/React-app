import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let myPostsData = [
  {id:0, postText:"Сегодня классная погода! Но где-то не здесь.", likesCount:10},
  {id:1, postText:"Хочу в горы!", likesCount:15},
  {id:2, postText:"Ищу работу...", likesCount:20},
];

const MyPosts = () => {
  return <div className={s.MyPostsBlock}>
    <h3>
    My posts
    </h3>
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div>
      <button>Remove</button>
      </div>
    </div>
    <div className={s.posts}>
      <Post message={myPostsData[0].postText} likesCount={myPostsData[0].likesCount} />
      <Post message={myPostsData[1].postText} likesCount={myPostsData[1].likesCount} />
      <Post message={myPostsData[2].postText} likesCount={myPostsData[2].likesCount} />
    </div>
  </div>
}

export default MyPosts;