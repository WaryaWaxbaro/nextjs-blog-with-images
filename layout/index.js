import React from "react";
import Navbar from "./../components/Navbar";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="bg-dark w-100" style={{ height: "250px" }}></footer>
    </>
  );
}

export default Layout;
