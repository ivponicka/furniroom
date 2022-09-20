import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './product.styles.css';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price} $</span>
      </div>
      <button className='add-to-cart-button' onClick={addProductToCart}>
        Add to card
      </button>
    </div>
  );
};

export default ProductCard;