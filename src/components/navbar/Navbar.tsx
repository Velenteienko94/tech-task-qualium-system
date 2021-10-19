import React from "react";

import "./styles.scss";

export const Navbar: React.FC = ({ children }) => {
  return (
    <div className="navbar">
      <h1>hello im navber</h1>
      {children}
    </div>
  );
};
