import React, { useState } from 'react'
// import { Row, Col } from 'react-'

const Event = () => {

    const [number, setNumber] = useState(100);

    const increaseNumber = () => {
        setNumber(number + 1);
    }

    const decreaseNumber = () => {
        setNumber(number - 1);
    }

    const resetNumber = () => {
        setNumber(100);
    }

    const doubleNumber = () => {
        setNumber(number * 2);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick = {increaseNumber}>Increase</button>
            <button onClick = {decreaseNumber}>Decrease</button>
            <button onClick = {doubleNumber}>Double</button>
            <button onClick = {resetNumber}>Reset</button>
        </div>
    )
}

export default Event