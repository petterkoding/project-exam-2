import React from "react";

const Heading = ({ size, children }) => {
  const VariableHeading = `h${size}`;
  return <VariableHeading>{children}</VariableHeading>;
};

export default Heading;

