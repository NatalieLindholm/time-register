"use client";
import { useState, useEffect } from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { saveTime } from "@/app/utils/handledb";

const Timer = ({ projectId }: { projectId: number }) => {
  const router = useRouter();
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: any;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
        console.log(seconds);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const startTimer = () => {
    setIsRunning(true);
    console.log("running");
  };

  const stopTimer = () => {
    setIsRunning(false);
    console.log("paused");
    saveTime(projectId, seconds);
    router.refresh();
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <div className="timeBox">{formatTime(seconds)}</div>
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
