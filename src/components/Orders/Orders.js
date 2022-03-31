import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <h1>Orders</h1>
            <h2>total products: {products.length}</h2>
        </div>
    );
};

export default Orders;