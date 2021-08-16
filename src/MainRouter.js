import React from "react";
import { Route, Switch ,Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const Login = React.lazy(() => import("./components/Login/Login"));
const Sigin = React.lazy(() => import("./components/Signup/Signup"));
const Home = React.lazy(() => import("./components/Home/Home"));

// import RecipeDetail from "./components/Recipe/RecipeDetail";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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
          component={Sigin}
        />
        <Route exact 
        path="/" 
        component={Home} />
      </Switch>
    </>
  );
};

        {/* <Route
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
        
        <Route exact path="/" component={Home}  /> */}

      

export default MainRouter;
