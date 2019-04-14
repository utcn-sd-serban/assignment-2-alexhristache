import React from "react";

const QuestionList = ({ questions, title, text, onCreate, onChange }) => (
    <div>
        <h2>Questions</h2>
        <div>
            <label>Title: </label>
            <input value={title}
                onChange={e => onChange("title", e.target.value)} />
            <br />
            <label>Text: </label>
            <input value={text}
                onChange={e => onChange("text", e.target.value)} />
            <br />
            <button onClick={onCreate}>Create</button>
        </div>
        <hr />
        <div>
            {
                questions.map(
                    (question) => (
                        <div>
                            <h4>{question.title}</h4>
                            <h5>by {question.user} on {question.creationDateTime}, {question.score} points </h5>
                            {question.text}
                            <br />
                        </div>
                    )
                )
            }
            {/* <table border='1'>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Creation Date/Time</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions.map((question) => (
                            <tr key={question.questionId}>
                                <td>{question.user}</td>
                                <td>{question.title}</td>
                                <td>{question.text}</td>
                                <td>{question.creationDateTime}</td>
                                <td>{question.score}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> */}
        </div>
    </div>
);

export default QuestionList;