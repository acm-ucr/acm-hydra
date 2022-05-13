import React from 'react'
import {Row, Container} from 'react-bootstrap'
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
      <Container>
        <Row>
          <Calendar apiKey={API_KEY} calendars={calendars} />
        </Row>
      </Container>
    );

}

export default CalendarPageOne;