import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import {minutesToDuration, secondsToDuration} from "../utils/duration";
import FocusDuration from "./FocusDuration";
import BreakDuration from "./BreakDuration";
import ProgressBar from "./ProgressBar";
import Paused from "./Paused";
import MainButtons from "./MainButtons";
import Display from "./Display";

function Pomodoro() {
  // Timer starts out paused
  const initialState = {
    time: 0,
    focusDuration: 25,
    breakDuration: 5,
    mode: "Focusing",
    timeRemaining: 1500,
    currentDuration: 25
  }
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState(initialState);
  
  useInterval(
    () => {
      switch (timer.mode){
        case "Focusing": 
          if (secondsToDuration(timer.time)===minutesToDuration(timer.focusDuration)) {
            new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1111.mp3`).play();
            setTimer({...timer, time: 0, mode: "On Break", timeRemaining: 0});
        } else {
          setTimer({...timer, time: timer.time + 1, timeRemaining: (timer.focusDuration*60-timer.time), currentDuration: timer.focusDuration});
        };
        break;
        case "On Break":
          if (secondsToDuration(timer.time)===minutesToDuration(timer.breakDuration)) {
            new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1111.mp3`).play();
            setTimer({...timer, time: 0, mode: "Focusing", timeRemaining: 0});
        } else {
          setTimer({...timer, time: timer.time + 1,timeRemaining: (timer.breakDuration*60-timer.time),currentDuration: timer.breakDuration});
        };
        break;
        default:
        setTimer({...timer, time: timer.time + 1});
        break;     
    }
  },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    if (timer.time===0) setTimer({...timer, time: 1})
  }

  function stop(){
    setTimer(initialState);
    setIsTimerRunning(false);

  }

  const focusDurationHandler = (event) => {
    switch (event.target.className) {
      case "oi oi-plus":
      setTimer({...timer, focusDuration: Math.min(timer.focusDuration + 5, 60),currentDuration: timer.focusDuration});
      break;
      case "btn btn-secondary increase":
      setTimer({...timer, focusDuration: Math.min(timer.focusDuration + 5, 60),currentDuration: timer.focusDuration});
      break;
      case "oi oi-minus":
      setTimer({...timer, focusDuration: Math.max(timer.focusDuration - 5,5),currentDuration: timer.focusDuration});
      break;
      case "btn btn-secondary decrease":
      setTimer({...timer, focusDuration: Math.max(timer.focusDuration - 5,5),currentDuration: timer.focusDuration});
      break;
      default:
      break;    
    }
  }

  const breakDurationHandler = (event) => {
    switch (event.target.className) {
      case "oi oi-plus":
      setTimer({...timer, breakDuration: Math.min(timer.breakDuration + 1, 15)});
      break;
      case "btn btn-secondary increase":
      setTimer({...timer, breakDuration: Math.min(timer.breakDuration + 1, 15)});
      break;
      case "oi oi-minus":
      setTimer({...timer, breakDuration: Math.max(timer.breakDuration - 1,1)});
      break;
      case "btn btn-secondary decrease":
      setTimer({...timer, breakDuration: Math.max(timer.breakDuration - 1,1)});
      break;
      default:
      break;    
    }
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <FocusDuration clickHandler={focusDurationHandler} timer={timer} running={isTimerRunning}/>
        <BreakDuration clickHandler={breakDurationHandler} timer={timer} running={isTimerRunning}/>
      </div>
        <MainButtons timer={timer} running={isTimerRunning} stop={stop} playPause={playPause} />
      <div>
        <Display timer={timer} running={isTimerRunning} />
        <Paused timer={timer} running={isTimerRunning}/>
        <ProgressBar timer={timer} running={isTimerRunning}/>
      </div>
    </div>
  );
}

export default Pomodoro;
