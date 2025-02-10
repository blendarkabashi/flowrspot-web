import React, { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`max-w-[1180px] mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
