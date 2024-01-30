import { Route, Switch } from "wouter";
import { Login, Dashboard } from "../pages";

const Router = () => {
  return (
    <>
      <Switch>
        {/* <Route path="/" component={User} /> */}
        <Route path="/login" component={Login} />
        <Dashboard />
        <Route>404, Not Found!</Route>
      </Switch>
    </>
  );
};
export default Router;
