import React from "react";
import {minutesToDuration} from "../utils/duration";
import classNames from "../utils/class-names";

function BreakDuration({clickHandler,timer,running}) {
    return (
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(timer.breakDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  onClick={clickHandler}
                  type="button"
                  className={classNames({
                    "btn": true,
                    "btn-secondary": true,
                    "decrease": true,
                    "off": (running || timer.time > 0),
                  })}
                  data-testid="decrease-break"
                >
                  <span className={classNames({
                  "oi": true,
                  "oi-minus": true,
                  "text-secondary": (running || timer.time > 0),
                })}/>
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  onClick={clickHandler}
                  type="button"
                  className={classNames({
                    "btn": true,
                    "btn-secondary": true,
                    "increase": true,
                    "off": (running || timer.time > 0),
                  })}
                  data-testid="increase-break"
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
        </div>
    );
}

export default BreakDuration;