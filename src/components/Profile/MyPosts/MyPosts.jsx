import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
    </div>
    <div className={s.posts}>
      <Post message='Сегодня классная погода! Но где-то не здесь.' likesCount='15' />
      <Post message='Хочу в горы!' likesCount='10'/>
      <Post message='Ищу работу...' likesCount='20'/>
    </div>
  </div>
}

export default MyPosts;