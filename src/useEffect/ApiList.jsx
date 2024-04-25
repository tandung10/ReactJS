import React, { useEffect, useState } from 'react';



const tabs = ['posts', 'comments', 'albums']

const ApiList = () => {

    const [type, setType] = useState('posts')
    const [list, setList] = useState([]);
    // console.log(type)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => setList(data))
        console.log('type change');
    }, [type])

    return (
        <div style={{ padding: 40 }}>
            {tabs.map(tab => (
                <button onClick={() => setType(tab)}
                    style={type === tab ? {
                        color: 'white',
                        backgroundColor: 'black'
                    } : {}}
                    key={tab}>{tab}</button>
            ))}

            <ul style={{ padding: 32 }}>
                {list.map(item => (
                    <li key={item.id}>{item.title || item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ApiList;