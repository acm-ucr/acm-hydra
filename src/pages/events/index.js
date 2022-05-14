import React from 'react'
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

import CalendarPageOne from '../../components/Events/CalendarPageOne';
import CalendarPage2 from '../../components/Events/CalendarPage2';

import SuggestionsForm from '../../components/Events/SuggestionsForm';

const Events = () => {
    return (
        <div>
            <Navigation />
            <CalendarPageOne />
            <CalendarPage2 />
            <SuggestionsForm />
            <Footer />
        </div>
    )
}

export default Events