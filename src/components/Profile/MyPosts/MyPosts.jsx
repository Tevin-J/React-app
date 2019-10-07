import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let newMessageElement = React.createRef ();
let addPost = () => {
  let text = newMessageElement.current.value;
  alert(text)
};


const MyPosts = (props) => {
  


  let postsElement = props.posts
  .map ( p => <Post message={p.postText} likesCount={p.likesCount} />);

 
  
  return <div className={s.MyPostsBlock}>
    <h3>
    My posts
    </h3>
    <div>
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick = {addPost}>Add post</button>
      </div>
      <div>
      <button>Remove</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElement}
    </div>
  </div>
}

export default MyPosts;