import React from 'react'
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";

import "./../styles/header.scss";
import { useSelector } from 'react-redux';

const Header = () => {

  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header>
      <div className="logo">
        <Link to={"/"}>
          <h1>Logo</h1>
        </Link>
      </div>

      <nav>
        <Link to={"/"}> Home </Link>

        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header