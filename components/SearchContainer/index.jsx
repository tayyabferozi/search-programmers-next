import React, { useContext } from "react";

import Select from "../Select/Select";
import Option from "../Select/Option";

import { GlobalContext } from "../../context/GlobalContext";

const content = {
  English: {
    text5: "Web Developer",
    text6: "App Developer",
  },
  Spanish: {
    text5: "Search Web Developer",
    text6: "Desarrolladora web",
  },
};

const SearchContainer = () => {
  const {
    state: { appLanguage },
  } = useContext(GlobalContext);

  return (
    <div className="search-container">
      <img src="/assets/vectors/magnifier.svg" alt="magnifier" />
      <input type="search" placeholder={content[appLanguage].text5} />
      <Select placeholder="Category">
        <Option value={content[appLanguage].text6}>
          {content[appLanguage].text5}
        </Option>
        <Option value={content[appLanguage].text7}>
          {content[appLanguage].text6}
        </Option>
      </Select>
    </div>
  );
};

export default SearchContainer;
