import React from "react";
import classNames from "../utils/class-names";


function ProgressBar({timer, running}) {
 let percent = 0;
 let currentTime = timer.time/60;
    if (timer.mode === "Focusing") {
    percent = (currentTime/timer.focusDuration) * 100;
 } else if (timer.mode === "On Break"){
    percent = (currentTime/timer.breakDuration) * 100;
 }

   return ( 
    <div className={classNames({
        "row mb-2": true,
        "d-none": !running && timer.time === 0,
    })}>
    <div className="col">
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={percent} // TODO: Increase aria-valuenow as elapsed time increases
          style={{ width: `${percent}%` }} // TODO: Increase width % as elapsed time increases
        />
      </div>
    </div>
  </div>
   ); 
}

export default ProgressBar;