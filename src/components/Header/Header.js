import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <nav className="header">
      <Link to={'/'}>
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="search_Input" />
        <SearchIcon className="search_Icon" />
      </div>

      <div className="header_nav">
        <Link to={'/login'} className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello, Guest</span>
            <span className="header_optionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link to={'/'} className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to={'/'} className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to={'/checkout'} className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
