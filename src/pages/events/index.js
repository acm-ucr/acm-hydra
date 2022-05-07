import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

import CalendarPageOne from '../../components/Events/CalendarPageOne';

import SuggestionsForm from '../../components/Events/SuggestionsForm';

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