import React, { useEffect, useState } from 'react';



const tabs = ['posts', 'comments', 'albums']

const ApiList = () => {

    const [type, setType] = useState('posts')
    const [list, setList] = useState([]);
    const [gotoTop, setGotoTop] = useState(false);
    // console.log(type)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => setList(data))
        // console.log('type change');
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            /* scrollY" là một thuộc tính của đối tượng window trong JavaScript. 
            Thuộc tính này trả về số lượng pixel mà tài liệu hiện tại được cuộn theo chiều dọc. */
            if (window.scrollY >= 200) {
                setGotoTop(true);
            } else {
                setGotoTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        console.log('addEventListener');

        // clean function luôn được gọi trước khi component Unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('removeEventListener');
        }
    }, [])

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

            {/* Nếu gotoTop là true thì biểu thức sau && (...) sẽ được render, ngược lại thì null */}
            {gotoTop && (
                <button style={{ position: 'fixed', right: 20, bottom: 20, borderRadius: 50 }}
                >Go to Top
                </button>
            )}
        </div>
    );
};

export default ApiList;