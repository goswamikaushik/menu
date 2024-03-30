import React from "react";
import className from "classnames";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  primary,
  success,
  secondary,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = twMerge(
    className(rest.className, " flex items-center px-3 py-1 border-2", {
      "bg-blue-500 border-blue-500 text-white": primary,
      "bg-green-500 border-green-500 text-white": success,
      "bg-gray-900 border-gray-900 text-white": secondary,
      "bg-yellow-400 border-yellow-400 text-white": warning,
      "bg-red-500 border-red-500 text-white": danger,
      "rounded-lg": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
      "text-green-500": outline && success,
    })
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, danger, secondary, warning, success }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, wanring, danger can be true"
      );
    }
  },
};

export default Button;
