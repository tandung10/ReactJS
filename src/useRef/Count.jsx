import React, { useRef, useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(60);

    let timerID = useRef();
    // let timerID;
    console.log(timerID);
    const handleStart = () => {
        timerID.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);
        // console.log(timerID); 
        console.log("Start " + timerID.current);
    }
    const handleStop = () => {
        clearInterval(timerID.current);
        // console.log(timerID);

        console.log("Stop " + timerID.current);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default Count;