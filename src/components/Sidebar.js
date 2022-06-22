import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalender";

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar/>
    </aside>
  );
}
