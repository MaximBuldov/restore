import React from 'react';
import './shop-header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";


const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
        <Link to="/" className="logo text-dark" >ReStore</Link>
        <Link to="/cart" className="shopping-cart">
                <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
                {numItems} items (${total})
        </Link>
    </header>
  );
};

export default ShopHeader;
