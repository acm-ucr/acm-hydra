import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer';


const Events = () => {

    const [number, setNumber] = useState(1);

    const increaseNumber = () => {
        setNumber(number + 1);
    }

    const decreaseNumber = () => {
        setNumber(number - 1);
    }

    const doubleNumber = () => {
        setNumber(number * 2);
    }

    const divideNumber = () => {
        setNumber(number / 2);
    }

    const resetNumber = () => {
        setNumber(1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increaseNumber}>Increase</button>
            <button onClick={decreaseNumber}>Decrease</button>
            <button onClick={doubleNumber}>Double</button>
            <button onClick={divideNumber}>Divide</button>
            <button onClick={resetNumber}>Reset</button>
            <Footer />
        </div>
    )
}

export default Events