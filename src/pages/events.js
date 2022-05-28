import React from 'react';
import { useState } from 'react';

const Button = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick = { increaseCount }>Click Me!</button>
            <h1> { count } </h1>
        </div>
    )
};

export default Button;