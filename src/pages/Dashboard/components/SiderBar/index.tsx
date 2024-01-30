import React from "react";
import dashboardRouter from "../../dashboardRouter";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { PresentationChartBarIcon } from "@heroicons/react/24/solid";

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useLocation } from "wouter";

export const Sidebar = () => {
  const [location, setLocation] = useLocation();
  return (
    <Card
      placeholder={""}
      className="h-screen w-full max-w-[20rem] p-4 rounded-none  border-0 border-r-2 border-blue-gray-200"
      shadow={false}
    >
      <div className="mb-2 p-4">
        <Typography placeholder={""} variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>

      <List placeholder={""}>
        {dashboardRouter.map(({ Icon, name, path }) => (
          <ListItem
            placeholder={""}
            onClick={() => setLocation(`/dashboard${path}`)}
            selected={`/dashboard${path}` === location}
          >
            <ListItemPrefix placeholder={""}>
              <Icon className="h-5 w-5" />
            </ListItemPrefix>
            {name}
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
