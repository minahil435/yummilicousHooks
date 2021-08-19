import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
const Login = React.lazy(() => import("./components/Login/Login"));
const SigIn = React.lazy(() => import("./components/Signup/Signup"));
const Home = React.lazy(() => import("./components/Home/Home"));
const RecipeDetail = React.lazy(() => import("./components/Recipe/RecipeDetail"));

function MainRouter() {
  return (
    <>
      <Nav />
      <Switch>
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/signup"
          component={SigIn}
        />
        <Route exact
          path="/"
          component={Home}
        />
        <PrivateRoute
          exact
          path="/recipe-detail/:recipeID"
          component={RecipeDetail}
        />
      </Switch>
    </>
  );
};

<PrivateRoute
  exact
  path="/recipe-detail/:recipeID"
  component={RecipeDetail}
/>

export default MainRouter;
