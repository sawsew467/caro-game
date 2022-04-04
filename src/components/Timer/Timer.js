import { useState, useEffect } from "react";
import "./Timer.css";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState({});
  const sendData = () => {
    props.parentCallback(time);
  };
  sendData();
  // var timeInc;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const timeInc = setInterval(() => {
      if (props.win === false) {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }

        if (minutes === 59) {
          setHours(hours + 1);
          setMinutes(0);
        }
      } else {
        clearInterval(timeInc);
        setTime({
          hours,
          minutes,
          seconds,
        });
      }
      clearInterval(timeInc);
    }, 1000);
    return () => clearInterval(timeInc);
  });

  return (
    <div className="timer__container">
      {hours >= 10 ? hours : "0" + hours}:
      {minutes >= 10 ? minutes : "0" + minutes}:
      {seconds >= 10 ? seconds : "0" + seconds}
    </div>
  );
}

export default Timer;
