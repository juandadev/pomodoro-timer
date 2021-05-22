import React from 'react';
import cog from '../assets/cog-solid.svg';
import '../scss/global.scss';

function App() {
  return (
    <div className="pomodoro">
      <h1 className="pomodoro__title">pomodoro</h1>

      <div className="pomodoro__controls">
        <p className="pomodoro__controls--pomo active">pomodoro</p>

        <p className="pomodoro__controls--short">short break</p>

        <p className="pomodoro__controls--long">long break</p>
      </div>

      <div className="pomodoro__timer">
        <div className="pomodoro__timer__container">
          <svg className="pomodoro__timer__progress" width={330} height={330}>
            <circle
              className="pomodoro__timer__circle"
              strokeWidth={13}
              stroke="white"
              fill="transparent"
              r={223.5}
              cx={247.5}
              cy={247.5}
            />
          </svg>

          <div className="pomodoro__timer__time">
            <div className="time">17:59</div>

            <div className="label">pause</div>
          </div>
        </div>
      </div>

      <div className="pomodoro__settings">
        <img src={cog} width={40} height={40} alt="Settings" title="Settings" />
      </div>
    </div>
  );
}

export default App;
