import "./Scoreboard.css";

function Scoreboard(props) {
  const timeData = props.timeData ?? {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const stepCount = props.historyData.length;

  return (
    <div className="scoreboard__wrapper">
      <div className="scoreboard__container">
        <div className="scoreboard__winner">{props.winer} won</div>
        <div className="scoreboard__time">
          Time: {timeData.hours >= 10 ? timeData.hours : "0" + timeData.hours}:
          {timeData.minutes >= 10 ? timeData.minutes : "0" + timeData.minutes}:
          {timeData.seconds >= 10 ? timeData.seconds : "0" + timeData.seconds}
        </div>
        <div className="scoreboard__step">Steps: {stepCount}</div>
        <div className="scoreboard__options">
          <button className="quit-btn">
            <a href="/">Quit</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
