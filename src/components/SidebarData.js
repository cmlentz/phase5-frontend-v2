import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
  
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiOutlineHome />,
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <AiIcons.AiOutlineUser />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "New Customer",
        path: "/newcustomer",
        icon: <AiIcons.AiOutlineUserAdd />,
      },
    ],
  },
  {
    title: "Activities",
    path: "/activities",
    icon: <IoIcons.IoIosList />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <AiIcons.AiOutlineQuestionCircle />,
  },
];