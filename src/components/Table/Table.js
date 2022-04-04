import { useState } from "react";
import "./Table.css";

function Table(props) {
  const initTable = () => {
    const array = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        array[10 * (i - 1) + j] = {
          x: i,
          y: j,
          status: "none",
          check: false,
          N1: 0,
          N2: 0,
          NE1: 0,
          NE2: 0,
          E1: 0,
          E2: 0,
          SE1: 0,
          SE2: 0,
          S1: 0,
          S2: 0,
          SW1: 0,
          SW2: 0,
          W1: 0,
          W2: 0,
          NW1: 0,
          NW2: 0,
        };
      }
    }
    return array;
  };
  const [playerTurn, setPlayerTurn] = useState("player 1");
  const [historyList, setHistoryList] = useState([]);
  const [table, setTable] = useState(initTable());
  // const table = initTable();
  const players = props.playersData;
  const sendHistory = () => {
    props.historyCallback(historyList);
  };
  const sendWiner = (winer) => {
    props.winerCallback(winer);
  };
  // console.log(playerTurn);
  const handleClick = (x, y) => {
    if (table[10 * (x - 1) + y].status === "none") {
      if (playerTurn === players.player1) {
        setPlayerTurn(players.player2);
      } else {
        setPlayerTurn(players.player1);
      }

      setHistoryList((prev) => {
        const newHistoryList = [
          ...prev,
          {
            turn:
              playerTurn === players.player1 ? players.name1 : players.name2,
            x: x,
            y: y,
          },
        ];

        table[10 * (x - 1) + y] = {
          x: x,
          y: y,
          status: playerTurn.split(" ").join(""),
          check: false,
          N1: 0,
          N2: 0,
          NE1: 0,
          NE2: 0,
          E1: 0,
          E2: 0,
          SE1: 0,
          SE2: 0,
          S1: 0,
          S2: 0,
          SW1: 0,
          SW2: 0,
          W1: 0,
          W2: 0,
          NW1: 0,
          NW2: 0,
        };
        return newHistoryList;
      });
    }
  };
  sendHistory();
  // console.log(table);
  //convert to 2D array
  const convertTable = () => {
    var array = [];
    array[1] = [
      table[1],
      table[2],
      table[3],
      table[4],
      table[5],
      table[6],
      table[7],
      table[8],
      table[9],
      table[10],
    ];
    array[2] = [
      table[11],
      table[12],
      table[13],
      table[14],
      table[15],
      table[16],
      table[17],
      table[18],
      table[19],
      table[20],
    ];
    array[3] = [
      table[21],
      table[22],
      table[23],
      table[24],
      table[25],
      table[26],
      table[27],
      table[28],
      table[29],
      table[30],
    ];
    array[4] = [
      table[31],
      table[32],
      table[33],
      table[34],
      table[35],
      table[36],
      table[37],
      table[38],
      table[39],
      table[40],
    ];
    array[5] = [
      table[41],
      table[42],
      table[43],
      table[44],
      table[45],
      table[46],
      table[47],
      table[48],
      table[49],
      table[50],
    ];
    array[6] = [
      table[51],
      table[52],
      table[53],
      table[54],
      table[55],
      table[56],
      table[57],
      table[58],
      table[59],
      table[60],
    ];
    array[7] = [
      table[61],
      table[62],
      table[63],
      table[64],
      table[65],
      table[66],
      table[67],
      table[68],
      table[69],
      table[70],
    ];
    array[8] = [
      table[71],
      table[72],
      table[73],
      table[74],
      table[75],
      table[76],
      table[77],
      table[78],
      table[79],
      table[80],
    ];
    array[9] = [
      table[81],
      table[82],
      table[83],
      table[84],
      table[85],
      table[86],
      table[87],
      table[88],
      table[89],
      table[90],
    ];
    array[10] = [
      table[91],
      table[92],
      table[93],
      table[94],
      table[95],
      table[96],
      table[97],
      table[98],
      table[99],
      table[100],
    ];
    return array;
  };
  const newTable = convertTable();
  // console.log("table:", table);
  //check win player 1
  for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 9; j++) {
      if (
        newTable[i][j].status !== "none" &&
        newTable[i][j].status === "player1"
      ) {
        newTable[i][j].check = true;
        if (newTable[i - 1][j].check === true) {
          newTable[i][j].N1 = newTable[i - 1][j].N1 + 1;
        }
        if (newTable[i - 1][j + 1].check === true) {
          newTable[i][j].NE1 = newTable[i - 1][j + 1].NE1 + 1;
        }
        if (newTable[i][j + 1].check === true) {
          newTable[i][j].E1 = newTable[i][j + 1].E1 + 1;
        }
        if (newTable[i + 1][j].check === true) {
          newTable[i][j].SE1 = newTable[i + 1][j].SE1 + 1;
        }
        if (newTable[i + 1][j].check === true) {
          newTable[i][j].S1 = newTable[i + 1][j].S1 + 1;
        }
        if (newTable[i - 1][j - 1].check === true) {
          newTable[i][j].SW1 = newTable[i - 1][j - 1].SW1 + 1;
        }
        if (newTable[i][j - 1].check === true) {
          newTable[i][j].W1 = newTable[i][j - 1].W1 + 1;
        }
        if (newTable[i - 1][j - 1].check === true) {
          newTable[i][j].NW1 = newTable[i - 1][j - 1].NW1 + 1;
        }
      }
      if (
        newTable[i][j].N1 === 4 ||
        newTable[i][j].NE1 === 4 ||
        newTable[i][j].E1 === 4 ||
        newTable[i][j].SE1 === 4 ||
        newTable[i][j].S1 === 4 ||
        newTable[i][j].SW1 === 4 ||
        newTable[i][j].W1 === 4 ||
        newTable[i][j].NW1 === 4
      ) {
        sendWiner(props.playersData.name1);
      }
    }
  }
  //check win player 2
  for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 9; j++) {
      if (
        newTable[i][j].status !== "none" &&
        newTable[i][j].status === "player2"
      ) {
        newTable[i][j].check = true;
        if (newTable[i - 1][j].check === true) {
          newTable[i][j].N2 = newTable[i - 1][j].N2 + 1;
        }
        if (newTable[i - 1][j + 1].check === true) {
          newTable[i][j].NE2 = newTable[i - 1][j + 1].NE2 + 1;
        }
        if (newTable[i][j + 1].check === true) {
          newTable[i][j].E2 = newTable[i][j + 1].E2 + 1;
        }
        if (newTable[i + 1][j].check === true) {
          newTable[i][j].SE2 = newTable[i + 1][j].SE2 + 1;
        }
        if (newTable[i + 1][j].check === true) {
          newTable[i][j].S2 = newTable[i + 1][j].S2 + 1;
        }
        if (newTable[i - 1][j - 1].check === true) {
          newTable[i][j].SW2 = newTable[i - 1][j - 1].SW2 + 1;
        }
        if (newTable[i][j - 1].check === true) {
          newTable[i][j].W2 = newTable[i][j - 1].W2 + 1;
        }
        if (newTable[i - 1][j - 1].check === true) {
          newTable[i][j].NW2 = newTable[i - 1][j - 1].NW2 + 1;
        }
      }
      if (
        newTable[i][j].N2 === 4 ||
        newTable[i][j].NE2 === 4 ||
        newTable[i][j].E2 === 4 ||
        newTable[i][j].SE2 === 4 ||
        newTable[i][j].S2 === 4 ||
        newTable[i][j].SW2 === 4 ||
        newTable[i][j].W2 === 4 ||
        newTable[i][j].NW2 === 4
      ) {
        sendWiner(props.playersData.name2);
      }
    }
  }
  console.log("table :", newTable);

  return (
    <div className="table__container">
      {table.map((item, index) => (
        <div
          key={index}
          className={"square " + item.status}
          onClick={() => handleClick(item.x, item.y)}
        ></div>
      ))}
    </div>
  );
}

export default Table;
