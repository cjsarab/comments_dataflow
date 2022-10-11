import React, {useState} from "react";
import CommentList from "../components/CommentList";

const CommentBox = () => {

    const [comments, SetComments] = useState(
        [
        {
            id: 1,
            author: "Rick Henry",
            text: "React is the best."
        },
        {
            id:2,
            author: "Val Gibson",
            text: "I'm dreaming in react."
        },
        ]
    )

    return (
        <>
        <h2>Comments</h2>
        <CommentList comments={comments}/>
        </>
    );
};

export default CommentBox;