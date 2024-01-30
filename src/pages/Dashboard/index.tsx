import { Route, Router, useRouter } from "wouter";
import { Menu } from "./components/Menu";
import dashboardRouter from "./dashboardRouter";

export const Dashboard = () => {
  const router = useRouter();
  return (
    <>
      <Menu>
        <Router base="/dashboard" parent={router}>
          {dashboardRouter.map(({ path, page }: any) => (
            <Route path={path} component={page} />
          ))}
        </Router>
      </Menu>
    </>
  );
};
