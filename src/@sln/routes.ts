import React from "react";
import Android from "@mui/icons-material/Android";
import Apple from "@mui/icons-material/Apple";

// interface
export type MenuRoute = {
  key?: string;
  title?: string;
  path?: string;
  icon?: any;
  enabled?: boolean;
  submenu?: Array<MenuRoute>;
};

export const routes: Array<MenuRoute> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
  },
  {
    key: "launch-route",
    title: "Launches",
    path: "/launch",
    enabled: true,
    submenu: [
      {
        key: "launch-upcoming-route",
        title: "Upcoming Launches",
        path: "/launch/upcoming",
        enabled: true,
      },
      {
        key: "launch-previous-route",
        title: "Previous Launches",
        path: "/launch/previous",
        enabled: true,
      },
      {
        enabled: true,
      },
      {
        key: "launch-spacex-route",
        title: "SpaceX",
        path: "/launch/spacex",
        enabled: true,
      },
      {
        key: "launch-vandenberg-route",
        title: "Vandenberg",
        path: "/launch/vandenberg",
        enabled: true,
      },
      {
        key: "launch-florida-route",
        title: "Florida",
        path: "/launch/florida",
        enabled: true,
      },
      {
        enabled: true,
      },
      {
        key: "launch-database-route",
        title: "Launch Database",
        path: "/launch/database",
        enabled: true,
      },
    ],
  },
  {
    key: "starship-route",
    title: "Starship",
    path: "/starship",
    enabled: true,
  },
  {
    key: "event-route",
    title: "Events",
    path: "/events",
    enabled: true,
  },
  {
    key: "astronauts-route",
    title: "Astronauts",
    path: "/astronauts",
    enabled: true,
  },
  {
    key: "vehicle-route",
    title: "Vehicle",
    path: "/vehicle",
    enabled: true,
  },
];
