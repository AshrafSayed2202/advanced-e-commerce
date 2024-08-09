import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const AddProduct = () => {
    const { addProduct } = useContext(ProductContext);
    const [product, setProduct] = useState({ name: '', price: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct({ name: '', price: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Product Name"
                required
            />
            <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Price"
                required
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
