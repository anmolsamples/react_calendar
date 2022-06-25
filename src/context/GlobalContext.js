import React from "react";
const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    showEventModal:false,
    conflctModal:false,
    smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
    setShowEventModal:()=>{},
    setConflictModal:()=>{},
    dispatchCalEvent: ({ type, payload }) => {},
    savedEvents:[]
  });
  export default GlobalContext;
