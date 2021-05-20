import React, { useState } from "react";

function createArea(props) {
  const [state, setState] = useState({
    title: "",
    content: ""
  });
  function changeState(event) {
    const { name, value } = event.target;
    setState((pr) => ({
      ...pr,
      [name]: value
    }));
  }
  return (
    <div>
      <form>
        <input
          onChange={changeState}
          name="title"
          placeholder="This is title.."
          value={state.title}
        />
        <textarea
          onChange={changeState}
          name="content"
          placeholder="Take a note.."
          value={state.content}
          rows="3"
        />
        <button
          onClick={(event) => {
            props.handleChange(state);
            setState({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default createArea;
