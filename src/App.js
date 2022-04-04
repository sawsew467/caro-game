import { useState } from "react";
import Intro from "./components/Intro/Intro.js";
import Timer from "./components/Timer/Timer.js";
import Info from "./components/Info/Info.js";
import Scoreboard from "./components/Scoreboard/Scoreboard.js";
import History from "./components/History/History.js";
import Table from "./components/Table/Table.js";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);
  const [players, setPlayers] = useState({});
  const callbackPlayers = (childData) => {
    setPlayers(childData);
    setStart(true);
  };
  const [history, setHistory] = useState({});
  const callbackHistory = (childData) => {
    setHistory(childData);
  };
  const [winer, setWiner] = useState("none");
  const callbackWiner = (childData) => {
    setWiner(childData);
  };
  if (winer === "player 1") {
    setWiner(players.name1);
  } else if (winer === "player 2") {
    setWiner(players.name2);
  }
  console.log("winer: ", winer);
  const [time, setTime] = useState({});
  const callbackTime = (childData) => {
    setTime(childData);
  };
  // const [win, setWin] = useState(false);
  // const handleClick = () => {
  //   setWin(!win);
  // };
  const win = winer !== "none" ? true : false;
  return (
    <div className="wrapper">
      <div className="App">
        <Intro parentCallback={callbackPlayers} />
        <div className="left-side ">
          {start && <Timer win={win} parentCallback={callbackTime} />}
          <Info playersData={players} />
          {win && (
            <Scoreboard timeData={time} historyData={history} winer={winer} />
          )}
          {/* {setTimeout(() => {
            return win && <Scoreboard timeData={time} historyData={history} />;
          }, 1000)} */}
          {/* <button onClick={handleClick}>change</button> */}
        </div>
        <div className="middle-side ">
          <Table
            playersData={players}
            historyCallback={callbackHistory}
            winerCallback={callbackWiner}
          />
        </div>
        <div className="right-side ">
          <History historyData={history} />
        </div>
      </div>
    </div>
  );
}

export default App;
