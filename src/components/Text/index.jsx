import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  s: "text-base font-normal",
  md: "text-[40px] font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-lamasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
