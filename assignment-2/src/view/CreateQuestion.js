import React from "react";

const CreateQuestion = ({ title, text, onCreate, onChange }) => (
    <div>
        <h2>Add Question</h2>
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
    </div>
);

export default CreateQuestion;