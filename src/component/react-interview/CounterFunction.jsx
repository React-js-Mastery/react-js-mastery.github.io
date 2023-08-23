import React, { useState } from "react";

function CounterFunction(){

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count+1);
    }

    const decrease = () => {
        setCount(count-1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default CounterFunction;