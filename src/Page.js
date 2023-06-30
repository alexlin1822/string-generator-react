import "./Page.css";
import React from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

const Page = () => {
  return (
    <div id="container">
      <Header />
      <div id="pagebody">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Page;
