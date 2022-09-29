import React from "react";
import "./Registration.css";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

function Registration({ children }: any) {
  return (
    <div className="registrationContainer">
      <Header />
      <Breadcrumbs />
      {children}
      <Footer />
    </div>
  );
}

export default Registration;
