import { useCallback, useEffect, useState } from "react";

export const useTimer = (initialTime = 120) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => {
        const newTime = time - 1;
        if (newTime < 0){
          setIsRunning(false);
        } else {
          setTime(newTime);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [time, isRunning]);

  const start = useCallback(() => {
    setIsRunning(true)
  }, [])

  const stop = useCallback(() => {
    setIsRunning(false)
  }, [])

  const reset = useCallback(() => {
    setIsRunning(false)
    setTime(initialTime)
  }, [initialTime])

  const updateTime = useCallback((time: number) => {
    setIsRunning(false)
    setTime(time)
  }, [])

  return { time, isRunning, start, stop, reset, updateTime }
}
