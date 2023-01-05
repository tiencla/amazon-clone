import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../Context/StateProvider';
import auth from '../../firebase-config';

const Header = () => {
  // const [state, dispatch] = useStateValue(); basket is the state
  const [{ basket, user }] = useStateValue();
  console.log('This is the basket----->', basket);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

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
        <Link to={!user && '/login'} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">Hello {user?.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
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
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length} {/* //? optional chaining */}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
