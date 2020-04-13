import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forum from "./pages/forum"
import Home from "./pages/home"
import Search from "./pages/search"
import SignUp from "./pages/signUp"
import User from "./pages/user"

function App() {

  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/search"}>
            <Search />
          </Route>
          <Route exact path={"/signup"}>
            <SignUp />
          </Route>
          <Route exact path={"/user/:id"}>
            <User />
          </Route>
          <Route exact path={"/forum/:id"}>
            <Forum />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
