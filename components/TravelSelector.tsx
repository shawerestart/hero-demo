"use client";
import {
  Select,
  Option,
  Tab,
  Tabs,
  TabsHeader,
  ButtonGroup,
  Button,
} from "@material-tailwind/react";
import classNames from "classnames";
import Image from "next/image";
import { useMemo, useState } from "react";
import MySelect from "./Select";
import DatePicker from "./DatePicker";

const TravelSelector = () => {
  const [activeTab, setActiveTab] = useState("Flight");

  const tabs = [
    {
      label: "Flight",
      value: "Flight",
    },
    {
      label: "Hotel",
      value: "Hotel",
    },
    {
      label: "Rent",
      value: "Rent",
    },
  ];

  const places = [
    {
      city: "Paris",
      country: "France",
    },
    {
      city: "San Diego",
      country: "United States",
    },
    {
      city: "London",
      country: "United Kingdom",
    },
    {
      city: "Berlin",
      country: "Germany",
    },
    {
      city: "Beijing",
      country: "China",
    },
  ];

  const placeOptions = useMemo(() => {
    return places.map((place) => {
      return {
        label: `${place.city}, ${place.country}`,
        value: `${place.city}, ${place.country}`,
      };
    });
  }, [places]);

  return (
    <div className="mt-4 z-5">
      <Tabs
        className={classNames(
          "overflow-hidden",
          "rounded-tl-[1.5rem]",
          "shadow-lg",
          "w-5/6 sm:w-5/6 lg:w-1/2"
        )}
        value={activeTab}
      >
        <TabsHeader
          className="bg-gray-200 rounded-none !p-0 z-5 bg-opacity-1"
          indicatorProps={{
            className: "bg-white rounded-none shadow-none !text-primary",
          }}
        >
          {tabs.map(({ label, value }, index) => (
            <Tab
              className={classNames(
                "text-sm",
                "py-4",
                "font-medium",
                activeTab === value ? "text-primary" : "text-gray-500"
              )}
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
            >
              <div className="flex flex-row items-center">
                <Image
                  className="mr-4"
                  alt={label}
                  src={`/icons/${value}.svg`}
                  width={24}
                  height={24}
                />
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
      <div
        className={classNames([
          "flex",
          // flex direction
          "flex-col sm:flex-col lg:flex-row",
          "items-center",
          "bg-white",
          "py-8",
          "lg:space-x-10",
          "shadow-lg",
          "rounded-b-[1.5rem]",
          "rounded-tr-[1.5rem]",
          "w-full",
          "sm:w-full lg:w-[960px]",
          "px-8",
          "sm:px-8 lg:px-12",
        ])}
      >
        <div
          className={classNames("flex", "flex-1", "w-full sm:w-full mb-8")}
        >
          <MySelect
            className=""
            label="Destination"
            options={placeOptions}
            defaultValue={placeOptions?.[0]?.value}
          />
        </div>
        <div className="h-10 border-l border-l-[1px] border-black rounded-md scale-x-50 hidden lg:block"></div>
        {/* <MySelect label="Date" options={} /> */}
        <div
          className={classNames("flex", "flex-1", "w-full sm:w-full mb-8")}
        >
          <DatePicker />
        </div>
        <Button className="bg-primary px-8 py-4 rounded-xl">Search</Button>
      </div>
    </div>
  );
};

export default TravelSelector;
