import React from "react";
import Day from "./Day";


export default function Month({ currentMonth }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, id) => (
            <Day day={day} key={id} rowId={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
