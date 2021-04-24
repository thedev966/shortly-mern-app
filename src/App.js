import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import axios from "./axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logOutUser, selectIsLoggedIn } from "./features/userSlice";
import Account from "./pages/Account";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getCurrentUser = () => {
    axios
      .get("/api/auth/getCurrentUser")
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          // logged in
          dispatch(loginUser(res.data.user));
        } else {
          // not logged in
          dispatch(logOutUser());
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Account Route */}
        <Switch>
          <Route path="/account">
            {isLoggedIn ? <Account /> : <Redirect to="/" />}
          </Route>
          {/* Home Route */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
