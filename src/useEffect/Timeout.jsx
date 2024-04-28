import React, { useEffect, useState } from 'react';

const Timeout = () => {

    const [counddown, setCoundown] = useState(180);

    // Cách 1: Dùng setInterval
    // useEffect(() => {
    //     setInterval(() => {
    //         setCoundown(preState => preState - 1);
    //     }, 1000)
    // }, [])

    // Cách 2: Dùng setTimeout

    useEffect(() => {
        setTimeout(() => {
            setCoundown(counddown - 1)
        }, 1000)
    }, [counddown])
    return (
        <div>
            <h1>{counddown}</h1>
        </div>
    );
};

export default Timeout;