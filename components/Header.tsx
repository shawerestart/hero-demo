"use client";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
const Header = () => {
  const [activeTab, setActiveTab] = useState("Destination");

  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const data = [
    {
      label: "Destination",
      value: "Destination",
    },
    {
      label: "Package",
      value: "Package",
    },
    {
      label: "Blog",
      value: "Blog",
    },
    {
      label: "About Us",
      value: "About Us",
    },
    {
      label: "Contact",
      value: "Contact",
    },
  ];

  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "justify-between",
        "items-center",
        "w-full"
      )}
    >
      <div className="flex flex-row">
        <IconButton
          className="bg-primary block lg:hidden mr-2"
          onClick={openDrawer}
        >
          <i className="fas fa-bars" />
        </IconButton>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Menu
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <List>
            {data.map(({ label, value }) => (
              <ListItem
                key={value}
                className="focus:bg-primary focus:text-white hover:bg-primary hover:text-white"
              >
                {label}
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Image
          className="relative"
          src="/logo.svg"
          alt="Soul Travel Logo"
          width={120}
          height={40}
          priority
        />
      </div>
      <Tabs className="w-2/5 hidden lg:block" value={activeTab}>
        <TabsHeader
          className={classNames(
            "rounded-none",
            "border-blue-gray-50",
            "bg-transparent"
          )}
          indicatorProps={{
            className: classNames(
              "bg-transparent",
              "before:content-[''] before:w-8 before:h-1 before before:absolute before:left-[calc(50%-1rem)] before:top-10 before:bg-primary before:rounded-lg",
              // "border-gray-900",
              "shadow-none",
              "rounded-none"
            ),
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={classNames(
                "text-sm",
                "py-3",
                "whitespace-nowrap",
                activeTab === value ? "text-gray-900" : ""
              )}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
      <div className="flex flex-2 space-x-2">
        <Button className="font-normal whitespace-nowrap" variant="text">
          Sign Up
        </Button>
        <Button
          className="font-normal whitespace-nowrap bg-primary"
          variant="filled"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};
export default Header;
