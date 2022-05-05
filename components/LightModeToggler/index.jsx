import React from "react";
import $ from "jquery";

const LightModeToggler = () => {
  const modeToggleHandler = (e) => {
    const isOn = e.target.checked;

    if (isOn) {
      $("body").addClass("dark-mode");
    } else {
      $("body").removeClass("dark-mode");
    }
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={modeToggleHandler} />
      <span className="slider round"></span>
      <img
        className="mode-night-2"
        src="/assets/vectors/mode-night-2.svg"
        alt="mode-night"
      />
      <img
        className="mode-night"
        src="/assets/vectors/mode-night.svg"
        alt="mode-night"
      />
      <img
        className="mode-day-2"
        src="/assets/vectors/mode-day-2.svg"
        alt="mode-day"
      />
      <img
        className="mode-day"
        src="/assets/vectors/mode-day.svg"
        alt="mode-day"
      />
    </label>
  );
};

export default LightModeToggler;
