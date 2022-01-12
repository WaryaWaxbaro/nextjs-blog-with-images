import React from "react";
import Navbar from "./../components/Navbar";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
