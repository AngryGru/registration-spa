import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import Registration from "../Registration";
import Main from "../../components/Main";

const Router = () => {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route
            path={"/signup"}
            element={
              <Registration>
                <Main isPersonal={false} />
              </Registration>
            }
          />
          <Route
            path={"/personal"}
            element={
              <Registration>
                <Main isPersonal />
              </Registration>
            }
          />
          <Route path="*" element={<Navigate to={"/signup"} replace />} />
        </Routes>
      }
    </BrowserRouter>
  );
};

export default Router;
