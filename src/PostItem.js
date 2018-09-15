import React from "react";

export const PostItem = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.body}</div>
    </div>
  );
};

export default PostItem;
