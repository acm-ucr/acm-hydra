import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

import CalendarPageOne from '../../components/Events/calendarPage1';

import SuggestionsForm from '../../components/Events/SuggestionsForm';
import { Container, Row, Col } from 'react-bootstrap';

const Events = () => {
    /*
    const [number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber(number + 1)
    }
    */

    return (
        <div>
            <Navigation />
            <CalendarPageOne />
            <SuggestionsForm />
            <Footer />
        </div>
    )
}

export default Events