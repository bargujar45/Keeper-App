import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea";

function App() {
  const [notes, setNote] = useState([]);

  function handleNote(state) {
    const newState = state;
    setNote([...notes, newState]);
  }

  function eraseNote(id) {
    setNote((prNotes) => {
      return prNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea handleChange={handleNote} />
      {notes.map((item, index) => (
        <Note
          deleteNote={eraseNote}
          id={index}
          title={item.title}
          content={item.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
