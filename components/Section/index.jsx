import React from "react";
import clsx from "clsx";

const Section = ({ className, children, ...rest }) => {
  return (
    <div className={clsx(className, "section")} {...rest}>
      <div className="page-container">{children}</div>
    </div>
  );
};

export default Section;
