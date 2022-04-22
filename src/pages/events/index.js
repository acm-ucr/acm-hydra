import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer';


const Events = () => {

    const [number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <button onClick={increaseNumber}>Increase</button>
            <h1>{number}</h1>
            <Footer />
        </div>
    )
}

export default Events