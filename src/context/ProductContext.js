import React, { createContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const { data, loading, error } = useFetch('https://dummyjson.com/products');

    useEffect(() => {
        if (data && data.products) {
            setProducts(data.products);
        }
    }, [data]);

    const addProduct = (product) => {
        setProducts([...products, { ...product, id: products.length + 1 }]);
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
};
