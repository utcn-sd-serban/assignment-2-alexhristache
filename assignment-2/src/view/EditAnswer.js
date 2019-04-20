import React from "react";

const EditAnswer = ({text, onChange}) => (
    <div>
        <h2>Login</h2>
        <br />
        <label>Answer: </label>
        <input value={text}
                onChange={e => onChange("text", e.target.value)} />
        <br />
        <button onClick={onLogin}>Login</button>
    </div>
);

export default EditAnswer;

