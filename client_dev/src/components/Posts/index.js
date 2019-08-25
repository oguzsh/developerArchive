import React from "react";
import PostCard from "../PostCard"
import "./posts.component.css"

const Posts = (props) => {
  return (
    <div className="Posts">
        <h1 className="PostText"><span role="img" aria-label="fastener"> 📌</span> Posts <span role="img" aria-label="fastener">📌</span></h1>
        <ul className="boxes">
          {props.posts.map(post => {
            return (
              <PostCard key={post._id} id={post._id} title={post.post_title} desc={post.post_desc} url={post.post_url}/>
            );
          })}
        </ul>
      </div>
     
  )
}
  
export default Posts