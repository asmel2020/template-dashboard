
import { Route, Switch } from "wouter";
import { Login} from "../pages";


const Router = () => {
  return (
    <Switch>
      {/* <Route path="/" component={User} /> */}
      <Route path="/login" component={Login} />
      {/* <Route path="/payment/:id" component={Payment} /> */}
      <Route>404, Not Found!</Route>
    </Switch>
  );
};
export default Router;
