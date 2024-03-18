import React from "react";
import BlogPost from "./BlogPost";

export default function BlogList(props) {
  return (
    <div className="post-container">
      <BlogPost post={props.post} />
    </div>
  );
}
