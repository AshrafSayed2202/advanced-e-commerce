import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cartItems, removeItem, getTotal } = useContext(CartContext);

    return (
        <div className='main-sec'>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} x ${item.price}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${getTotal()}</h3>
        </div>
    );
};

export default Cart;
