import { PresentationChartBarIcon } from "@heroicons/react/24/solid";
import { DashboardRouter } from "./interfaces/DashboardRouter";
import { Example, Home } from "./subPages";




const dashboardRouter:DashboardRouter[] = [
  {
    name: "Dashboard",
    path: "/",
    page: Home,
    Icon: PresentationChartBarIcon
  },
  {
    name: "Example",
    path: "/example",
    page: Example,
    Icon: PresentationChartBarIcon
  },
];

export default dashboardRouter;
