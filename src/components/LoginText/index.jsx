import React from "react";

const sizes = {
  xs: "text-base font-light",
  s: "text-lg font-medium",
};

const LoginText = ({
  children,
  className = "",
  as,
  size = "xs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900 font-lamasans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { LoginText };
