import React,{useState ,useContext, useEffect } from 'react';
import './App.css';
import {getMonth} from './util.js'
import CalendarHeader from "./components/CalenderHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from './components/EventModal';
import ConflictModal from './components/ConflictModal';



function App({day}) {
  
  
const[currentMonth,setCurrentMonth]=useState(getMonth());
const {monthIndex,showEventModal,conflctModal } = useContext(GlobalContext)





useEffect(() => {
  setCurrentMonth(getMonth(monthIndex));
}, [monthIndex]);




  return (
  <>

  {conflctModal&&<ConflictModal/>}
  {showEventModal&&<EventModal/>}
   <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month currentMonth={currentMonth} />
        </div>
      </div>
  </>
  );
}

export default App;
