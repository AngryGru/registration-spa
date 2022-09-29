import React from "react";
import "./App.css";
import Router from "./pages/Router/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Registration from "./pages/Registration";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
