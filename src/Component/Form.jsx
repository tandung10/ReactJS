import React, { useState } from 'react';

const Form = () => {

    const [value, setValue] = useState('');


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Ban vua nhap: ' + value)
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit} style={{ padding: 100 }}>
            <input type="text" value={value} onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;