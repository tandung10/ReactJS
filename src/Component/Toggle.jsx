import React, { useState } from 'react';

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const handleStatus = () => {
        setIsOn(!isOn)

    }
    return (
        <div style={{ padding: 100 }}>
            <button onClick={handleStatus}>Status {isOn ? 'Tat' : 'Bat'}</button>
        </div>
    );
};

export default Toggle;