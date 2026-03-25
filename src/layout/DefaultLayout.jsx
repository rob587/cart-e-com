import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
