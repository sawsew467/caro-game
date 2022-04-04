import "./Info.css";

function Info(props) {
  const players = props.playersData;
  // console.log(players);
  // const players = {
  //   name1: "Thang",
  //   name2: "Quan",
  // };
  return (
    <div className="info__container">
      <div className="info__item">
        <div className="info__name">{players.name1}: </div>
        <div className="info__sign">X</div>
      </div>
      <div className="info__item">
        <div className="info__name">{players.name2}: </div>
        <div className="info__sign">O</div>
      </div>
    </div>
  );
}

export default Info;
