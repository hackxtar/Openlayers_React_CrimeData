import React from "react";
import ListComp from "./ListComp";
import { useState, useEffect } from "react";

function SidePanel() {
  const [data, setData] = useState([]);
  const arr = [];
  const getData = () => {
    fetch("incidentsData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        for (let i = 0; i < 100; i++) {
          arr.push(myJson.data[i]);
        }
        console.log(arr);

        setData(arr);
        return myJson.data;
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="side-panel">
      <h1>City Crime Data</h1>
      <div>
        <ul>
          {data.map((res, i) => (
            <ListComp
              key={i}
              keydata={`model${i}`}
              address={res[16]}
              warrants={res[9]}
              warrants_details={res[10]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidePanel;
