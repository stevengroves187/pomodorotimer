import React from "react";
import classNames from "../utils/class-names";

function Paused({timer, running}){
const paused = (!running && (parseInt(timer.time))>0);
return (
    <div className="row mb-2">
      <div className="col">
           <h2 className={classNames({
        "d-block": paused,
        "d-none": !paused,
    })}>PAUSED</h2>
      </div>
    </div>
);
}


export default Paused;