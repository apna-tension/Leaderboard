import React, { useState } from "react";

const AddScorePopup = ({ addScore, closePopup }) => {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && score) {
      addScore({ username, score });
      setUsername("");
      setScore("");
      closePopup();
    }
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <label>
          PlayerName:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Player Name : "
            required
          />
        </label>
        <label>
          Player Score:
          <input
            type="text"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="MM:SS:MSS"
            required
          />
        </label>
        <button type="submit">Add Score</button>
        <button type="button" onClick={closePopup}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddScorePopup;
