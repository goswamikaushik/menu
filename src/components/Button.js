import React from "react";

const Button = ({
  children,
  primary,
  danger,
  secondary,
  warning,
  success,
  outline,
  rounded,
}) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: ({ primary, danger, secondary, warning, success }) => {
    console.log(primary);
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
