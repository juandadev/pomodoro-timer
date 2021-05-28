import React, { useState } from 'react';
import Timer from './Timer';
import Settings from './Settings';

import cog from '../assets/cog-solid.svg';
import '../scss/global.scss';

function App() {
  const [time, setTime] = useState(1500);
  const [minutes, setMinutes] = useState(25);
  const [isOpen, setIsOpen] = useState(false);
  // TODO: Pass isPaused property via React.Context

  function handleChange(e) {
    const { value } = e.target;

    setMinutes(value);
    setTime(value * 60);
  }

  function handleModal(option) {
    const options = {
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };

    return options[option]();
  }

  return (
    <>
      <div className="pomodoro">
        <h1 className="pomodoro__title">
          <span className="emoji">🍅</span> pomodoro
        </h1>

        <div className="pomodoro__controls">
          <p className="pomodoro__controls--pomo active">pomodoro</p>

          <p className="pomodoro__controls--short">short break</p>

          <p className="pomodoro__controls--long">long break</p>
        </div>

        <Timer time={time} />

        <div className="pomodoro__settings">
          <img
            src={cog}
            width={40}
            height={40}
            alt="Settings"
            title="Settings"
            onClick={() => handleModal('open')}
          />
        </div>
      </div>

      <Settings
        isOpen={isOpen}
        state={minutes}
        onChange={handleChange}
        closeModal={() => handleModal('close')}
      />
    </>
  );
}

export default App;
