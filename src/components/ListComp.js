import React from "react";
import DetailedList from "./DetailedList";
import { useState } from "react";

function ListComp(props) {
  const [showComponent, setshowComponent] = useState(false);
  const [Address, setAddress] = useState("");

  const detailedData = () => {
    setshowComponent(true);
    setAddress(props.address);
  };
  return (
    <>
      <li onClick={detailedData}>{props.address}</li>
      {showComponent ? (
        <DetailedList
          address={Address}
          visiblity={true}
          warrants={props.warrants}
          warrants_details={props.warrants_details}
        />
      ) : null}
    </>
  );
}

export default ListComp;
