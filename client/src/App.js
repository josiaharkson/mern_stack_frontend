import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingIndicator from "./components/LoadingIndicator";

function LoadPageComponent(name) {
  const Component = React.lazy(() => import(`./pages/${name}`));
  return Component;
}

const Home = LoadPageComponent("Home");
const ERROR_404 = LoadPageComponent("ERROR_404");

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<LoadingIndicator />}>
            <Home />
          </Suspense>
        </Route>

        <Route exact path="*">
          <Suspense fallback={<LoadingIndicator />}>
            <ERROR_404 />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
