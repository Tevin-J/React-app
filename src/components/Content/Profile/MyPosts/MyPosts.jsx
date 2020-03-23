import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import PropTypes from 'prop-types';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utilits/validators/validators";
import {Textarea} from "../../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostBody'} placeholder={"What's new?"}
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form: 'newPostBody'
})(AddNewPostForm)

const MyPosts = (props) => {
    let postData = props.postData;

    let postsElements = postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const addPost = (values) => {
        props.addPost(values.newPostBody)
    }
    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={addPost}/>
            {postsElements}
        </div>
    );
}

export default MyPosts;

MyPosts.propTypes = {
    postData: PropTypes.array,
    newPostText: PropTypes.string
}