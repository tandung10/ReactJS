import React, { useState } from 'react';

const TodoList = () => {
    const [job, setJob] = useState("");
    const [list, setList] = useState([]);
    console.log(job);

    // const a = {
    //     id: 1,
    //     name: "ab"
    // }
    // const { id, name } = a; // Detructoring
    // console.log(id); // 1

    // const arr = [1, 2, 3, 4, 5];
    // const [a, b, c, ...d] = arr;
    // console.log(a, b, c, ...d);

    function handleClick() {
        setList([...list, job]);
        setJob("");
    }

    return (
        <div className='container'>
            <input value={job} className='input_job' type="text" onChange={(e) => {
                setJob(e.target.value);
            }} />
            <button className='btn_add' onClick={handleClick}>Add job</button>
            <ul className='job_list'>
                {list.map((item, index) => {
                    return <div key={index}>
                        <li className='job_item'>{item}</li>
                        <span>&times;</span>
                        {/* <button onClick={handleEdit}>Edit</button> */}
                    </div>
                })}
            </ul>
        </div>
    );
};

export default TodoList;