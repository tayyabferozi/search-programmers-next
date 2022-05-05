import React from "react";
import clsx from "clsx";
import Link from "next/link";

const Button = ({
  className,
  to,
  primary,
  primaryInverted,
  transparent,
  children,
  ...rest
}) => {
  const classes = clsx(
    "btn",
    className,
    primary && "btn-primary",
    primaryInverted && "btn-primary-inverted",
    transparent && "btn-transparent"
  );

  // let btnChildren = <div className="btn-text">{children}</div>;

  if (to) {
    return (
      <Link className={classes} href={to} {...rest}>
        <div className="btn-text">{children}</div>;
      </Link>
    );
  } else {
    return (
      <button className={classes} {...rest}>
        <div className="btn-text">{children}</div>;
      </button>
    );
  }
};

export default Button;
