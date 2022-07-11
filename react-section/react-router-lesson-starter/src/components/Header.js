import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../features/session/sessionSlice";
import { NavLink } from "react-router-dom";

// Import the NavLink component.

export default function Header () {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(logOut())
  }

  // Replace the 4 <a> tags with <NavLink> components
  return (
    <div className="header">
      <a href="/about">About</a>
      <a href="/articles">Articles</a>
      <a href="/categories">Categories</a>
      {
        currentUser.username ?
          <>
            <NavLink to="/profile">Profile</NavLink>
            <button onClick={handleLogout} className="logout"> Log Out </button>
          </> :
          <a href="/sign-up">Sign Up</a>
      }
    </div>
  )
}
