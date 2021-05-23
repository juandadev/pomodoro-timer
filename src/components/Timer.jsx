import React, { useState, useEffect } from 'react';

export default function Timer({ time }) {
  const [progressBar, setProgressBar] = useState({});
  const [timer, setTimer] = useState([0, 0]);
  const [percent, setPercent] = useState(100);
  const [isPaused, setIsPaused] = useState(true);

  const circumference = progressBar.radius * 2 * Math.PI;
  const minutes = timer[0].toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const seconds = timer[1].toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  function updateSize() {
    const containerWidth =
      document.querySelector('.pomodoro__timer__container').offsetWidth * 0.9;
    const radiusFormula = containerWidth / 2 - 12 * 2;

    setProgressBar({
      size: containerWidth,
      radius: radiusFormula,
      position: containerWidth / 2,
    });
  }

  function parseTime(seconds) {
    const minutes = parseInt(seconds / 60);
    const remainingSeconds = seconds % 60;

    return [minutes, remainingSeconds];
  }

  function initializeTimer() {
    setTimer(parseTime(time));
  }

  function startTimer() {
    let seconds = time;
    setIsPaused(false);

    if (isPaused) {
      setPercent(0);
      const timeInterval = setInterval(() => {
        seconds -= 1;
        setTimer(parseTime(seconds));
        setPercent(((time - seconds) * 100) / time);

        if (seconds <= 0) {
          clearInterval(timeInterval);
          setIsPaused(true);
        }
      }, 1000);
    }
  }

  useEffect(() => {
    updateSize();
    initializeTimer();

    window.addEventListener('resize', updateSize);
  }, []);

  return (
    <div className="pomodoro__timer">
      <div className="pomodoro__timer__container" onClick={startTimer}>
        <svg
          className="pomodoro__timer__progress"
          width={progressBar.size}
          height={progressBar.size}
        >
          <circle
            className="pomodoro__timer__circle"
            strokeWidth={13}
            strokeDashoffset={circumference - (percent / 100) * circumference}
            strokeDasharray={[circumference, circumference]}
            fill="transparent"
            r={progressBar.radius}
            cx={progressBar.position}
            cy={progressBar.position}
            style={{
              transformOrigin: `${progressBar.position}px ${progressBar.position}px`,
            }}
          />
        </svg>

        <div className="pomodoro__timer__time">
          <div className="time">{`${minutes}:${seconds}`}</div>

          <p className="label">{isPaused ? 'start' : 'pause'}</p>
        </div>
      </div>
    </div>
  );
}
