import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../navbar";
import Footer from "../footer";

const Layout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
