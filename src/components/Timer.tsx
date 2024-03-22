"use client";
import { useState, useEffect } from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let interval: any;

    if (isRunning) {
      interval = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);

        if (seconds < 59) {
          setSeconds((prevSeconds) => prevSeconds + 1);
        } else {
          setSeconds(0);
          if (minutes < 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
          } else {
            setMinutes(0);
            setHours((prevHours) => prevHours + 1);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes, hours]);

  const startTimer = () => {
    setIsRunning(true);
    console.log("running");
  };

  const stopTimer = () => {
    setIsRunning(false);
    console.log("paused");
  };

  return (
    <div>
      <div className="timeBox">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
      <div className="buttons">
        <button onClick={stopTimer} className="pause">
          <FaPause />
        </button>
        <button onClick={startTimer} className="start">
          <FaPlay />
        </button>
      </div>
    </div>
  );
};

export default Timer;
