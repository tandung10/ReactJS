import React, { useState } from 'react';

const Todolist = () => {
    const [job, setJob] = useState('');
    const [list, setList] = useState([]);
    console.log(job);

    const handleClick = () => {
        setList([...list, job]);
        setJob('')
    }

    return (
        <div className='container'>
            <div className='header-todolist'>
                <h1 className='title'>To-do Now</h1>
                <input className='input-todolist' type="text" value={job} onChange={(e) => {
                    setJob(e.target.value)
                }} />
                <button className='btn-todolist' onClick={handleClick}>ADD</button>
                <ul className='list-todolist'>
                    {list.map((item, index) =>
                        <div className="icon">
                            <li key={index}>{item}</li>
                            <span>&#10005;</span>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Todolist;