import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Imports all wrappers and containers
import Wrapper from "./pages/Wrapper";
import LandingPage from "./pages/LandingPage";

const App = () => (
  <Wrapper>
    <Router>
      <Switch>
        <Route path={"/"} component={LandingPage} exact />
      </Switch>
    </Router>
  </Wrapper>
);

export default App;
