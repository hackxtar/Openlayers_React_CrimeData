import React, { useState } from "react";

function DetailedList(props) {
  const [visible, setvisible] = useState(props.visiblity);
  return (
    <div className={visible ? "modal" : "hide"}>
      <div class="modal-content">
        <span
          class="close"
          onClick={() => {
            setvisible(false);
          }}
        >
          X
        </span>
        <p>
          <b>Address: </b>
          {props.address}
        </p>
        <p>
          <b>WARRANTS: </b>
          {props.warrants}
        </p>
        <p>
          <b>WARRANTS DETAILS: </b>
          {props.warrants_details}
        </p>
      </div>
    </div>
  );
}

export default DetailedList;
