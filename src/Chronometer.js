import { useState, useEffect } from "react";

function Chronometer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, isActive, isPaused]);

  const startHandle = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const stopHandle = () => {
    setIsPaused(!isPaused);
  };

  const resetHandle = () => {
    setTime(0);
  };

  const days = 1000 * 60 * 60 * 24;
  const hours = 1000 * 60 * 60;
  const minutes = 1000 * 60;
  const seconds = 1000;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div>
        <div>
          <h1 className="text-[2rem] mb-5">React Chrono.</h1>
        </div>
        <div className="h-[10rem] w-[16rem] bg-white p-2">
          <div className="bg-pink-200 h-[5rem] flex justify-center items-center">
          <p>{Math.floor(((time % days) % hours) / minutes).toString().length === 1? "0" + Math.floor(((time % days) % hours) / minutes): Math.floor(((time % days) % hours) / minutes)}</p><p>:</p><p>{Math.floor((((time % days) % hours) % minutes) / seconds).toString().length === 1? "0" +Math.floor((((time % days) % hours) % minutes) / seconds): Math.floor((((time % days) % hours) % minutes) / seconds)}</p><p>:</p><p>{time.toString().slice(-3, -1)}</p>
          </div>
          <div className="mt-4 flex gap-3 justify-center">
            <button onClick={startHandle} className="border-2 bg-purple-200">
              START
            </button>
            <button onClick={stopHandle} className="border-2 bg-red-200">
              STOP
            </button>
            <button onClick={resetHandle} className="border-2 bg-yellow-200">
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chronometer;
