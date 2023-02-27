import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { singOutUser } from "../../utils/firebase.utils";

import "./navigation.style.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
const Navigator = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"></CrownLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={singOutUser}>
              Sing-Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sing-In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigator;
