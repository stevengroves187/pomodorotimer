import React from "react";
import classNames from "../utils/class-names";

function MainButtons({timer,running, stop, playPause}){
return (
    <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !running,
                  "oi-media-pause": running,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
            <button
              onClick={stop}
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
            >
              <span className={classNames({
                  oi: true,
                  "oi-media-stop": true,
                  "text-secondary": timer.time === 0,
                })} />
            </button>
          </div>
        </div>
      </div>
);
}

export default MainButtons;