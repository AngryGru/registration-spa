import React from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SignUpInfoForm from "../SignUpInfoForm";
import PersonalInfoForm from "../PersonalInfoForm";

const Main = ({ isPersonal }: any) => {
  return (
    <div className="mainContainer">
      {isPersonal ? <PersonalInfoForm /> : <SignUpInfoForm />}
    </div>
  );
};

export default Main;
