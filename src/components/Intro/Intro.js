import { useState } from "react";
import "./Intro.css";

function Intro(props) {
  const [start, setStart] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const players = {
    player1: "player 1",
    name1: "AI",
    player2: "player 2",
    name2: playerName,
  };
  const sendData = () => {
    props.parentCallback(players);
  };
  const handleClick = () => {
    setStart(!start);
    sendData();
  };

  return (
    <div className={start === false ? "intro__wrapper" : "intro__wrapper hide"}>
      <div className="intro__container">
        <div className="intro__heading">Tik Tak Toe</div>
        <div className="intro__name">Your name</div>
        <input
          type="input"
          className="intro__input"
          onChange={(e) => setPlayerName(e.target.value)}
        ></input>
        <button className="intro__start-btn" onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Intro;
