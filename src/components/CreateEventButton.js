import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const {setShowEventModal}=useContext(GlobalContext)
  return (
    <button 
    className="border p-4 rounded-full flex items-center shadow-md hover:shadow-2xl bg-Dodger-blue-600"
    onClick={()=>setShowEventModal(true)}>
      <span className="pl-3 pr-7"> Add event</span>
    </button>
  );
}