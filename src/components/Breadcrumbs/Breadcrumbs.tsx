import { NavLink } from "react-router-dom";
import "./Breadcrumbs.css";
import classNames from "classnames";
import { SignupSelector, signupUser } from "../../redux/reducers/signupReducer";
import { useSelector } from "react-redux";

function Breadcrumbs() {
  const isLoggedIn = useSelector(SignupSelector.getLogStatus);
  return (
    <div className="breadcrumbs">
      <NavLink className="breadcrumbs-item" to="/signup">
        Sign Up
      </NavLink>
      <NavLink
        className={classNames("breadcrumbs-item", {
          ["breadcrumbs-item-disabled"]: !isLoggedIn,
        })}
        to="/personal"
      >
        Personal Info
      </NavLink>
    </div>
  );
}

export default Breadcrumbs;
