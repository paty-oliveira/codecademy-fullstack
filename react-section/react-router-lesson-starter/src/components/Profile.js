import React from "react";
import { useSelector } from "react-redux";
import { Route, Link, useRouteMatch, Redirect } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import EditProfileForm from "./EditProfileForm";

export default function Profile () {
  const { url, path } = useRouteMatch();
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);

  if (!loggedIn) {
    return (
      <Redirect to="/sign-up"/>
    )
  }

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`${url}/edit`}>Edit</Link>
      <Route path={`${path}/edit`}>
        <EditProfileForm />
      </Route>
    </main>
  )
}
