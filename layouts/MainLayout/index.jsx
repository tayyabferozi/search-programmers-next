import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div id="main-layout">
      <Header />

      <div id="main-body">{children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
