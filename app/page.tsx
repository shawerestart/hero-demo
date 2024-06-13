"use client";
import classNames from "classnames";
import Header from "@/components/Header";
import TravelSelector from "@/components/TravelSelector";
import * as _ from "lodash-es";
import BGContainer from "@/components/BGContainer";

export default function Home() {


  return (
    <main
      className={classNames(
        "flex",
        "min-h-screen",
        "flex-col",
        "py-6",
        "px-4 sm:px-4 lg:px-8 xl:px-24"
      )}
    >
      {/* header */}
      <Header />
      {/* title */}
      <div className="flex flex-row">
        <div>
          <div
            className={classNames(["flex flex-col pt-12", "sm:w-4/5 lg:w-1/3"])}
          >
            <div className="font-bebas text-[4rem] sm:text-[4rem] lg:text-[5rem] mt-60 sm:mt-80 md:mt-60 lg:mt-40 xl:mt-20 2xl:mt-0">
              <div>Let's go!</div>
              <div className="flex flex-row">
                The <span className="text-primary ml-2">adventure</span>
              </div>
              <div>is waiting for you</div>
            </div>
            <div className="text-gray-600 text-xl break-words">
              Pack your luggage and pick your destination, we will provide you
              the flight ticket, hotel booking and best guides
            </div>
          </div>
          <TravelSelector />
        </div>
      </div>
      <BGContainer />
    </main>
  );
}
