import React, { useState, useRef } from "react";
import clsx from "clsx";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import { SelectContext } from "./selectContext";

const Select = ({
  id,
  label,
  rootClassName,
  children,
  defaultValue,
  placeholder,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");
  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || "Choose an option";
  const selectContainerRef = useRef(null);
  const listRef = useRef();

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
    onChange(option);
  };

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div className={clsx(rootClassName, "custom-form-control")}>
        {label && <label htmlFor={id}>{label}</label>}
        <div className="custom-select-container" ref={selectContainerRef}>
          <div
            className={clsx(
              "selected-text",
              showDropdown && "active",
              selectedOption.length > 0 && "added"
            )}
            // className={showDropdown ? "selected-text active" : "selected-text"}
            onClick={showDropdownHandler}
          >
            {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
          </div>
          <ul
            className={
              showDropdown
                ? "select-options show-dropdown-options"
                : "select-options hide-dropdown-options"
            }
            ref={listRef}
          >
            {children}
          </ul>
        </div>
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
