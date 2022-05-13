import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import { Upcoming } from '../../components/Events/Upcoming';


const Events = () => {

    const [number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            {/* <Navigation /> */}
            <Upcoming />
            {/* <Footer />  */}
        </div>
    )
}

export default Events