import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [progressBar, setProgressBar] = useState({});

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

  useEffect(() => {
    updateSize();

    window.addEventListener('resize', updateSize);
  }, []);

  return (
    <div className="pomodoro__timer">
      <div className="pomodoro__timer__container">
        <svg
          className="pomodoro__timer__progress"
          width={progressBar.size}
          height={progressBar.size}
        >
          <circle
            className="pomodoro__timer__circle"
            strokeWidth={13}
            stroke="white"
            fill="transparent"
            r={progressBar.radius}
            cx={progressBar.position}
            cy={progressBar.position}
          />
        </svg>

        <div className="pomodoro__timer__time">
          <div className="time">17:59</div>

          <div className="label">pause</div>
        </div>
      </div>
    </div>
  );
}
