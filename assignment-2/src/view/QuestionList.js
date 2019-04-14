import React from "react";

const QuestionList = ({ questions, onCreateQuestion, onViewDetails }) => (
    <div>
        <h2>Questions</h2>
        <button onClick={onCreateQuestion}>Add Question</button>
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Creation Date/Time</th>
                        <th>Score</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions.map((question, index) => (
                            <tr key={index}>
                                <td>{question.user}</td>
                                <td>{question.title}</td>
                                <td>{question.text}</td>
                                <td>{question.creationDateTime}</td>
                                <td>{question.score}</td>
                                <td><button onClick={ () => onViewDetails(index)}>View Details</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
);

export default QuestionList;