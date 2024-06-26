import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <button onClick={() => setCount(count - 1)}>decrease</button>

        </div>
    );
};

export default Count;