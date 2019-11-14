import React from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from 'prop-types';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData} newPostText={props.state.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;

Profile.propTypes = {
    postData: PropTypes.array,
    newPostText: PropTypes.string
}