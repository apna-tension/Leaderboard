import React, { useState, useEffect } from "react";
import AddScorePopup from "./AddScorePopup";

const initialScores = [
  { username: "Player6", score: "01:40:100" },
  { username: "Player2", score: "01:22:300" },
  { username: "Player15", score: "02:25:000" },
  { username: "Player20", score: "02:50:500" },
  { username: "Player10", score: "02:00:500" },
  { username: "Player7", score: "01:45:200" },
  { username: "Player4", score: "01:30:200" },
  { username: "Player8", score: "01:50:300" },
  { username: "Player1", score: "01:20:500" },
  { username: "Player9", score: "01:55:400" },
  { username: "Player19", score: "02:45:400" },
  { username: "Player12", score: "02:10:700" },
  { username: "Player3", score: "01:25:100" },
  { username: "Player13", score: "02:15:800" },
  { username: "Player14", score: "02:20:900" },
  { username: "Player16", score: "02:30:100" },
  { username: "Player11", score: "02:05:600" },
  { username: "Player17", score: "02:35:200" },
  { username: "Player18", score: "02:40:300" },
  { username: "Player5", score: "01:35:500" },
  // Add more dummy data...
];

const parseScore = (score) => {
  const [minutes, seconds, milliseconds] = score.split(":").map(Number);
  return minutes * 60 * 1000 + seconds * 1000 + milliseconds;
};

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const sortedScores = initialScores
      .sort((a, b) => {
        return parseScore(a.score) - parseScore(b.score);
      })
      .slice(0, 10);
    setScores(sortedScores);
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
    <div className="leaderboard">
      <h1>Top 10 Scores</h1>
      <ul className="score-list">
        <li className="score-item score-heading">
          <span className="rank">Rank</span>
          <span className="username">PlayerName</span>
          <span className="score">Score</span>
        </li>
        <div className="scores">
          {scores.map((entry, index) => (
            <li key={index} className="score-item">
              <span className="rank">{index + 1}</span>
              <span className="username">{entry.username}</span>
              <span className="score">{entry.score}</span>
            </li>
          ))}
        </div>
      </ul>
      <button onClick={() => setIsPopupVisible(true)}>Add Score</button>
      {isPopupVisible && (
        <AddScorePopup
          addScore={addScore}
          closePopup={() => setIsPopupVisible(false)}
        />
      )}
    </div>
  );
};

export default Leaderboard;
