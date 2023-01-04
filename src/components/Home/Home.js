import React from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css';
import banner from './img/prime_day3.jpg';
import book1 from './img/LOTR.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home"></div>
      <img className="home_image" src={banner} alt="banner" />

      <div className="home_row">
        <Product
          id="12321341"
          title="The Lord of the Rings: The Fellowship of the Ring (The Lord of the Rings 1)"
          price={15.99}
          rating={5}
          image={book1}
        />

        <Product
          id="49538094"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="4903850"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
        <Product
          id="23445930"
          title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor"
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="3254354345"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image='data:image/jpeg;base64,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'
        />
      </div>

      <div className="home_row">
        <Product
          id="90829332"
          title="iPad Pro 12.9-inch (4th generation) 128GB Wi-Fi - Space Gray (Renewed)"
          price={699.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._AC_SL1500_.jpg"
        />
      </div>
    </>
  );
};

export default Home;
