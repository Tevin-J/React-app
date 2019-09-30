import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div>
    <div>
      <img src='https://www.atlasandboots.com/wp-content/uploads/2019/05/feat-image-1-most-beautiful-mountains-in-the-world.jpg' />
    </div>
    <div>ava+description</div>
    <MyPosts />
  </div>
}

export default Profile;