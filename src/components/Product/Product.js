import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import './Product.css';

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  // // Add item to basket
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        //* this is the action
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    // Main container
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="BLANK" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
