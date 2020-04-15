<<<<<<< HEAD
import React, { Component } from "react";
import Navbar from './components/Navbar/Navbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/BackDrop/Backdrop'
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forum from "./pages/forum"
import Home from "./pages/home"
import Search from "./pages/search"
import SignUp from "./pages/signUp"
import User from "./pages/user"
import Nav from "./components/Nav"
>>>>>>> e4ca3bcdd4543d8f47be68924e8fa336bed95c08

class App extends Component {
  state = {
    sideDrawerOpen: false 
  };

<<<<<<< HEAD
drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  })
};

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false});
};

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop  click={this.backdropClickHandler} />
    }
    return (
      <div style={{height:'100%'}}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
        <p>this is the page content</p>
        </main>
        
=======
  return (
    <Router>
      <div>
        <Nav />
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
>>>>>>> e4ca3bcdd4543d8f47be68924e8fa336bed95c08
      </div>
    );
  }
}

export default App;

