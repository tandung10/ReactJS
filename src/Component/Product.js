import React, { useEffect, useState } from 'react';
import "../../src/App.css";


const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                console.log(data.products);
            })

    }, []);

    return (
        <div>
            {products.map((item) => <div className="container" key={item.id}>
                <img src={item.thumbnail} alt="avatar" className="img_product" />
                <h2 className="title">{item.title}</h2>
                <p className="desc">{item.description}</p>
                <span className="cost">{item.price}</span>
            </div>)}
        </div>
    )
};



export default Product;