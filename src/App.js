import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextWrapper from "./context/AuthContext";
import Spinner from "./components/Spinner/Spinner"
import MainRouter from "./MainRouter";
require("dotenv").config()
function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <AuthContextWrapper>
          <MainRouter />
        </AuthContextWrapper>
      </Router>
    </React.Suspense>
  );
}

export default App;
