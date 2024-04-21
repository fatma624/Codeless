import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Desktop from "pages/Desktop";
import Web from "pages/Web";
import NewProject from "pages/NewProject";
import Archived from "pages/Archived";
import HelpAndSupport from "pages/HelpAndSupport";
import Registration from "pages/Registration";
import Login from "pages/Login";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Login /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktop",
      element: <Desktop />,
    },
    {
      path: "web",
      element: <Web />,
    },
    {
      path: "newProject",
      element: <NewProject />,
    },
    {
      path: "archived",
      element: <Archived />,
    },
    {
      path: "helpandsupport",
      element: <HelpAndSupport />,
    },
    {
      path: "registration",
      element: <Registration />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
