import React from 'react';
import css from './MyPosts.module.css';
import Post from '../post/post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <Post message="Hi, how are you?" likesCount='0' />
      <Post message="It's my first post" likesCount='5' />
      <Post message="I'm glad you like it" likesCount='25' />
    </div>
  )

}

export default MyPosts;

