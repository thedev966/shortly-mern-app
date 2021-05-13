import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logOutUser, selectIsLoggedIn } from "./features/userSlice";
import Account from "./pages/Account";
import Home from "./pages/Home";
import axios from "./axios";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getCurrentUser = async () => {
    const res = await axios.get("/api/auth/getCurrentUser").catch((err) => {
      console.log(err.message);
    });

    if (res.data.success) {
      // logged in
      dispatch(loginUser(res.data.user));
    } else {
      // not logged in
      dispatch(logOutUser());
    }
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
