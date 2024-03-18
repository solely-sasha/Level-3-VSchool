import React from "react";

export default function BlogPost(props) {
  if (!props.post.subTitle === "") {
    return;
  }

  return (
    <div className="main-content-container">
      <a href="#" className="titles">
        <h2>{props.post.title} </h2>
        <h3>{props.post.subTitle} </h3>
      </a>
      <p>
        Posted by{" "}
        <a
          className="authorLink"
          href="https://startbootstrap.github.io/startbootstrap-clean-blog/#!"
        >{`${props.post.author}`}</a>{" "}
        on {`${props.post.date}`}
      </p>
    </div>
  );
}
