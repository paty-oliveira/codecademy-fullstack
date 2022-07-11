import React, { useState } from "react";
import { signUp } from "../features/session/sessionSlice"
import { useDispatch } from "react-redux";
import  { useHistory } from "react-router-dom";

export default function SignUp () {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({username: username}));
    history.push('/profile');
  }

  return (
    <section>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <div>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <button type="submit" className="primary">
              Sign Up
            </button>
          </div>
        </label>
      </form>
    </section>
  );
}
