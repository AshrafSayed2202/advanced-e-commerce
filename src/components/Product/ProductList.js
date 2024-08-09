import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductItem from './ProductItem';

const ProductList = () => {
    const { products } = useContext(ProductContext);

    return (
        <div>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
