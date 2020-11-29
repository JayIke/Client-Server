import React, { useState } from "react";
import "./Compose.css";

function Compose(props) {
  const [message, setMessage] = useState({
    author: "",
    message: "",
    timeStamp: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setMessage((prevMessage) => {
      return {
        ...prevMessage,
        [name]: value
      };
    });
  }

  function submitMessage(event) {
    props.onAdd(message);
    setMessage({
      author: "apple",
      message: "",
      timeStamp: new Date().getTime()
    });
    event.preventDefault();
  }

  return (
    <div className="compose">
      <form>
        <input
          type="text"
          className="compose-input"
          name="message"
          onChange={handleChange}
          value={message.message}
          placeholder="Type a message, @name"
        />
        <button onClick={submitMessage}>Send</button>
        {props.rightItems}
      </form>
    </div>
  );
}

export default Compose;
