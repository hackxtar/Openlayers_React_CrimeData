import React from "react";
import "./style/main.css";
import dummy from "../img/dummy.png";
import ListComp from "./ListComp";
function MapComp(props) {
  return (
    <div>
      <ul>
        {props.data.map((res, i) => (
          <ListComp key={i} address={res[16]} />
        ))}
      </ul>
    </div>
  );
}

export default MapComp;
