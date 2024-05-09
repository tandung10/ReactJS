import React, { useEffect, useState } from 'react';


const Api = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    console.log(list);
    return (
        <div style={{ padding: 40 }}>
            {list.map((item => (
                <ul key={item.id}>
                    <li>{item.title}</li>
                </ul>
            )))}
        </div>
    );
};

export default Api;