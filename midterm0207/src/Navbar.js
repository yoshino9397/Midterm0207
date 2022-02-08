import React from "react";
import { useGlobalContext } from "./context";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3>Phone Market</h3>
        <div className="nav-container">
          <ShoppingBasketIcon fontSize="large"/>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
