"use client";

import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-glass.css";
import { useEffect } from "react";

export default function CalendarView() {
  useEffect(() => {
    new Calendar({
      id: "#calendar",
      theme: "glass",
      weekdayType: "long-upper",
      monthDisplayType: "long",
      calendarSize: "small",
      layoutModifiers: ["month-left-align"],
      eventsData: [
        // @data format
        // {
        //   id: 1,
        //   name: "French class",
        //   start: "2020-08-17T06:00:00",
        //   end: "2020-08-18T20:30:00",
        // },
        {
          id: 2,
          name: "Blockchain 101",
          start: "2023-11-20T10:00:00",
          end: "2023-11-22T11:30:00",
        },
      ],
      dateChanged: (currentDate: any, events: any) => {
        //console.log("date change", currentDate, events);
      },
      monthChanged: (currentDate: any, events: any) => {
        //console.log("month change", currentDate, events);
      },
    });
  }, []);

  return <div id="calendar"></div>;
}
