import React, { useState } from 'react';

function TodoApp() {

    // get Data localStorage and convert about array 
    const storageJob = JSON.parse(localStorage.getItem('jobs'))

    // useState
    const [jobs, setJobs] = useState(storageJob ?? []);
    const [job, setJob] = useState('');



    const handleAdd = () => {
        setJobs(prev => {
            const newJobs = [...prev, job];

            // Save to localStorage: String
            const jsonJob = JSON.stringify(newJobs);
            localStorage.setItem('jobs', jsonJob);


            return newJobs;
        });
        setJob('');
    }
    return (
        <div style={{ padding: 35 }}>
            <input type="text" value={job} onChange={e => setJob(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;