import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import Header from '../Header/Header';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Checkout = () => {
  //* dispatch is how we manipulate the data/remove from basket
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>
                {' '}
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout_title">Your Shopping Basket</h2>
              {/* List out all of the Checkout Products */}
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
            <div className="checkout_right">
                <Subtotal />
            </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
