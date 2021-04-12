import React from "react";
import classNames from "../utils/class-names";
import {minutesToDuration, secondsToDuration} from "../utils/duration";

function Display({timer,running,}) {
return (
    <>
    <span
                className={classNames({
                  oi: true,
                  "oi-media-play": running,
                  "oi-media-pause": !running,
                  "d-none": timer.time === 0,
                })}
              />
        <div className={classNames({
                "row mb-2": true,
                "d-none": !running && timer.time === 0,
                "d-block": running,
              })}>
          <div className="col">
            <h2 data-testid="session-title">{timer.mode} for {minutesToDuration(timer.currentDuration)} minutes</h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(timer.timeRemaining)} remaining
            </p>
          </div>
        </div>
    </>
);
}

export default Display;