import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "./App.css";
import React, { useState, useEffect } from "react";
import MapComp from "./components/MapComp";
import SidePanel from "./components/SidePanel";

function App() {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [-13357557.063135909, 4400363.126234853],
        zoom: 4,
        maxZoom: 13,
        minZoom: 5,
      }),
    });
  });
  // const [data, setData] = useState([]);
  // const arr = [];
  // const getData = () => {
  //   fetch("incidentsData.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((myJson) => {
  //       for (let i = 0; i < 100; i++) {
  //         arr.push(myJson.data[i]);
  //       }
  //       setData(arr);
  //       return myJson.data;
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <div className="main">
        <div id="map"></div>
        <SidePanel />
      </div>
      {/* <div className="appData">
        <MapComp data={data} />
      </div> */}
    </>
  );
}

export default App;
