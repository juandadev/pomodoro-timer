import React from 'react';
import Timer from './Timer';

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

      <Timer />

      <div className="pomodoro__settings">
        <img src={cog} width={40} height={40} alt="Settings" title="Settings" />
      </div>
    </div>
  );
}

export default App;
