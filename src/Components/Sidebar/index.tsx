import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

function Sidebar() {
  const [first, setfirst] = useState(localStorage?.getItem("validation"));
  useEffect(() => {
    setfirst(localStorage?.getItem("validation"));
  }, [first]);

  return (
    <div className="sidebar">
      <div className="side-buton">
        <ul>
          {first === "SUCCESS" ? (
            <>
              <li className="Login">
                <Link to="/">Profile</Link>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="Login">
                <Link to="/">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="outlate">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
