import React from "react";

const QuestionDetails = ({user, title, text, creationDateTime, score}) => (
    <div>
        <h2>Question</h2>
        <label>Title: </label>
        <span>{title}</span>
        <br />
        <label>User: </label>
        <span>{user}</span>
        <br />
        <label>Score: </label>
        <span>{score}</span>
        <br />
        <label>Posted on: </label>
        <span>{creationDateTime}</span>
        <br />
        <label>Question: </label>
        <span>{text}</span>
    </div>
);

export default QuestionDetails;