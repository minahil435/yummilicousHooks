import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const MainRouter = (props) => {

  return (
    <Router>
      <Nav user={props.user} handleUserLogout={props.handleUserLogout} />
      <>
        <Route
          exact
          path="/sign-up"
          render={(routerProps) => (
            <Signup {...routerProps} handleUserLogin={props.handleUserLogin} />
          )}
        />

        <Route
          exact
          path="/login"
          render={(routerProps) => (
            <Login {...routerProps} handleUserLogin={props.handleUserLogin} />
          )}
        />

        <PrivateRoute
          exact
          path="/recipe-detail/:recipeID"
          component={RecipeDetail}
        />
        
        <Route exact path="/" component={Home}  />

      </>
    </Router>
  );
};

export default MainRouter;
