import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ProductItem = ({ product }) => {
    const { addItem } = useContext(CartContext)
    const oldPrice = product.price
    const discount = product.discountPercentage
    const newPrice = oldPrice - (oldPrice * discount / 100)
    const price = discount ? newPrice : discount;
    return (
        <div className="product-card">
            {discount ? <span className='discount'>- {discount.toFixed(1)}%</span> : ''}
            <img src={product.thumbnail} alt="product" />
            <div className='product-text'>
                <p className='prod-title'>{product.title}</p>
                <p className='brand'>{product.brand}<FontAwesomeIcon icon="fa-solid fa-certificate" /></p>
                <p className='prod-description'>{product.description}</p>
                <div className='price-rate'><div><span className={discount ? 'red-price' : 'white-price'}>{price.toFixed(2)}$</span>{discount ? <span className='old-price'>{oldPrice.toFixed(2)}$</span> : ''}</div> <div className='rating'>{product.rating.toFixed(1)}<FontAwesomeIcon icon="fa-solid fa-star" /></div></div>
                <button className='add-btn' onClick={() => {
                    addItem({
                        id: product.id,
                        name: product.title,
                        image: product.thumbnail,
                        price: price
                    })
                }}>Add to cart</button>
            </div>
        </div>
    )
}
export default ProductItem