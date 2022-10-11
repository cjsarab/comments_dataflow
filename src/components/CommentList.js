import React from "react";
import Comment from "./Comment";

const CommentList = ({comments}) => {

    const commentNodes = comments.map((comment) => {
        return (
      <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
        );
    });

    return (
        <>
        <p>I'm a CommentList. Look at my comments!</p>
        {commentNodes}
        </>
    );
};






export default CommentList;