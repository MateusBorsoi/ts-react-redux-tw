import { setTimer } from "@/redux/slices/timerSlice";
import { TimerState } from "@/types/TimerTypes";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Countdown({ timer }: TimerState) {
  const [countdown, setCountdown] = useState(3600);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timer) {
      const elapsedTimeInSeconds = Math.floor(
        (Date.now() - timer.timeStamp) / 1000
      );
      const remainingTime = Math.max(
        0,
        timer.tempoInicial - elapsedTimeInSeconds
      );
      setCountdown(remainingTime);
    }

    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  addEventListener("beforeunload", () => {
    dispatch(
      setTimer({
        tempoInicial: countdown,
        tempoAtual: Date.now(),
        timeStamp: Date.now(),
      })
    );
  });

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return (
    <div>
      <h1>Countdown:</h1>
      <p>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}

export default Countdown;
