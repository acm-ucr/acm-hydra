import React from 'react'
import Calendar from "@ericz1803/react-google-calendar";

import "./calendarPageOne.css";

const API_KEY = "";
let calendars = [
  {
    calendarId: ""
  }
];

const CalendarPageOne = () => {

    return (

      <div className="events-calendarpageone-calendarcontainer">
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    );

}

export default CalendarPageOne;