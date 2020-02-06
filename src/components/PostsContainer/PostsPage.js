//Complete the necessary code in this file
import React, { useState } from 'react';
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  const [arrayItem, setArrayItem] = useState(props.data[0])
  return (
    <div className="posts-container-wrapper">
      {props.data.map(item => {
        return <Post post={arrayItem} />;
      })}
    </div>
  );
};

export default PostsPage;

