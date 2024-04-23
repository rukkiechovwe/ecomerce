import React from "react";
import Nav from "../nav";

export default function WebisteLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
