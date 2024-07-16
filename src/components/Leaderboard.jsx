import React, { useState, useEffect } from "react";
import AddScorePopup from "./AddScorePopup";

const initialScores = [
  { username: "Player1", score: "01:20:500" },
  { username: "Player2", score: "01:30:500" },
  { username: "Player4", score: "01:50:500" },
  { username: "Player7", score: "01:40:500" },
  { username: "Player5", score: "01:00:500" },
  { username: "Player6", score: "01:10:500" },
  { username: "Player5", score: "01:20:600" },

  // Add more dummy data...
];

const parseScore = (score) => {
  const [minutes, seconds, milliseconds] = score.split(":").map(Number);
  return minutes * 60 * 1000 + seconds * 1000 + milliseconds;
};

const Leaderboard = () => {
  const [scores, setScores] = useState(initialScores);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // useeffect to automatic sort the scoreboard
  useEffect(() => {
    const updatedScores = initialScores
      .sort((a, b) => {
        return parseScore(a.score) - parseScore(b.score);
      })
      .slice(0, 10);
    setScores(updatedScores);
  }, []);

  const addScore = (newScore) => {
    const updatedScores = [...scores, newScore]
      .sort((a, b) => {
        return parseScore(a.score) - parseScore(b.score);
      })
      .slice(0, 10);
    setScores(updatedScores);
  };

  return (
    <>
        <div className="leaderboard">
        <h1>Leaderboard</h1>
        </div>
      <div className="leaderboard">
        <h1>Top 10 Scores</h1>
        <ul>
          {scores.map((entry, index) => (
            <li key={index}>
              {entry.username}: {entry.score}
            </li>
          ))}
        </ul>
        <button onClick={() => setIsPopupVisible(true)}>Add Score</button>
        {isPopupVisible && (
          <AddScorePopup
            addScore={addScore}
            closePopup={() => setIsPopupVisible(false)}
          />
        )}
      </div>
    </>
  );
};

export default Leaderboard;
