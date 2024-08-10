import React, { useState, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate()
    const { addProduct } = useContext(ProductContext);
    const [product, setProduct] = useState({
        name: '',
        price: '',
        imageUrl: '',
        brandName: '',
        description: '',
        discount: '',
        rate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct({
            name: '',
            price: '',
            imageUrl: '',
            brandName: '',
            description: '',
            discount: '',
            rate: ''
        });
        navigate('/')
    };

    return (
        <form onSubmit={handleSubmit} className='main-sec'>
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
            <input
                type="text"
                name="imageUrl"
                value={product.imageUrl}
                onChange={handleChange}
                placeholder="Image URL"
                required
            />
            <input
                type="text"
                name="brandName"
                value={product.brandName}
                onChange={handleChange}
                placeholder="Brand Name"
                required
            />
            <input
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <input
                type="number"
                name="discount"
                value={product.discount}
                onChange={handleChange}
                placeholder="Discount (optional, max 100)"
                max="100"
            />
            <input
                type="number"
                name="rate"
                value={product.rate}
                onChange={handleChange}
                placeholder="Rate (optional, max 5)"
                max="5"
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
