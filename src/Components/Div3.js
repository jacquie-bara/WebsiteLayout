import React from "react";
const Div3 = (props) => {
  return (
    <div className="div3">
      <div className="title">
        <h1>{props.sport.sportName.toLowerCase()}</h1>
      </div>
      <div className="container">
        <div className="sub-title">
          <h3>Market ID</h3>
        </div>
        <div className="sub-title">
          <h3>Event ID</h3>
        </div>
      </div>
      <div className="container">
        <div className="sub-title-value">
          <p>{props.market.marketId}</p>
        </div>
        <div className="sub-title-value">
          <p>{props.sport.eventId}</p>
        </div>
      </div>
    </div>
  );
};
export default Div3;
