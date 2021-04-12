import React from "react";
import {minutesToDuration} from "../utils/duration";
import classNames from "../utils/class-names";

function FocusDuration({clickHandler, timer, running}) {
    return (
    <div className="col">
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        Focus Duration: {minutesToDuration(timer.focusDuration)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <button
          onClick= {clickHandler}
          type="button"
          className={classNames({
            "btn": true,
            "btn-secondary": true,
            "decrease": true,
            "off": (running || timer.time > 0),
          })}
          data-testid="decrease-focus"
        >
          <span className={classNames({
                  "oi": true,
                  "oi-minus": true,
                  "text-secondary": (running || timer.time > 0),
                })}/>
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          onClick= {clickHandler}
          id="increase"
          type="button"
          className={classNames({
            "btn": true,
            "btn-secondary": true,
            "increase": true,
            "off": (running || timer.time > 0),
          })}
          data-testid="increase-focus"
        >
          <span className={classNames({
                  "oi": true,
                  "oi-plus": true,
                  "text-secondary": (running || timer.time > 0),
                })} />
        </button>
      </div>
    </div>
  </div>
    );
}

export default FocusDuration;