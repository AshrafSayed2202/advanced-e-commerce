import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};
