import { useState, useEffect } from "react";
import "./History.css";

function History(props) {
  // console.log(props.historyData);
  // const historyList = props.historyData ?? [];
  // const [historyList, setHistoryList] = useState(props.historyData ?? []);
  // if (props.historyData.length > 0) {
  //   const historyList = props.historyData;
  // } else {
  //   const historyList = [];
  // }

  const historyList = props.historyData.length > 0 ? props.historyData : [];

  return (
    <div className="history__container">
      <div className="history__heading">History</div>
      <ul className="history__list" id="style-3">
        {historyList.map((item, index) => (
          <li key={index} className="history__item">
            {item.turn}: [{item.x}; {item.y}]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
