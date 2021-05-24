import React from 'react';
import ReactDOM from 'react-dom';

export default function Settings({ isOpen, state, onChange, closeModal }) {
  return ReactDOM.createPortal(
    <div className={`modal__container ${isOpen && 'show'}`}>
      <div className="modal">
        <div className="modal--close" onClick={closeModal}>
          Close
        </div>

        <label htmlFor="minutes">
          Minutes
          <input
            type="number"
            name="minutes"
            id="minutes"
            min={0}
            value={state}
            onChange={onChange}
          />
        </label>

        <button className="modal--btn" type="button">
          Set time
        </button>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}
