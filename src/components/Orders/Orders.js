import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    const deleteReviewItem = (id) => {
        const rest = cart.filter(product => product.id !== id)
        setCart(rest)
        removeFromDb(id)
    }
    return (
        <div>
            <h1 className='order-title'>Orders</h1>
            <h3 className='order-total'>order items: {cart.length}</h3>
            <div className='shop-container'>
                <div className="review-container">
                    {
                        cart.map(item => <ReviewItem
                            key={item.id}
                            item={item}
                            deleteReviewItem={deleteReviewItem}
                        />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;