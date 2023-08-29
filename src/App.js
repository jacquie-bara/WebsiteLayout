import React from "react";
import { useState, useEffect } from "react";
import Div3 from "./Components/Div3";
let svg = require("./Images/melon.svg");
const data = require("./Data/testData.json");

export function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    svg = svg.replaceAll("fill:%23515262;", "fill:%230000FF;");
    loadData();
  }, []);

  function loadData() {
    const tempList = [];
    data.forEach((testData, i) => {
      tempList.push(
        <Div3
          key={i}
          index={i}
          sport={testData.testData[0].sport}
          market={testData.testData[0].market}
        ></Div3>
      );
    });
    tempList.sort((obj1, obj2) => {
      return obj2.props.market.marketId - obj1.props.market.marketId;
    });
    setDataList(tempList);
  }

  return (
    <div className="main">
      <div className="container">
        <div className="top">
          <img src={svg} style={{ width: "80px", padding: "10px" }} />
        </div>
        <div className="bottom">
          <div className="left" />
          <div className="right">{dataList}</div>
        </div>
      </div>
    </div>
  );
}
