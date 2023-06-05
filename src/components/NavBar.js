import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar" style={{display:"flex", justifyContent:"space-between", width:"30%"}}>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default NavBar;
