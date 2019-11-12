import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPostElement = React.createRef(); /*отслеживает то, что мы ввели*/
    let addPost = () => { /*при нажатии на кнопку Add post запоминает ту информацию, которая введена*/
        let text = newPostElement.current.value;
        props.addPost(text); /*то, что попадает в text, переносится в ф-ю addPost,
        которая находится в state.js*/
        newPostElement.current.value = ''; /*обнулили текстовую область после нажатия кнопки add*/
    };

    let postsElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;