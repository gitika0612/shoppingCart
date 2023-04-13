import React, {useContext} from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Divider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cart.css";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from "./items";
import { CartContext } from './cart';

function MainCart() {
  const {item, clearCart, totalItems, totalAmount} = useContext(CartContext);

  if(item.length === 0) {
    return (
      <>
      <div className='body'>
        <div className="header">
          <div className="continue-shopping"> 
              <h4> <ArrowBackIcon /> </h4> 
              <h3> continue shopping </h3>
          </div>
          <div className="cart-icon">
            <h4> <ShoppingCartIcon />  </h4> 
            <p> 0 </p> 
          </div>
        </div>

         <Divider />

        <div className='main-cart'>
            <h4> Shopping Cart</h4>
            <p> You have <span className='total-items-count'> 0</span> items in shopping cart</p>
        </div>
      </div>
      </>
    )
  }
  return (
    <>
      <div className="body">
        <div className="header">
          <div className="continue-shopping"> 
              <h4> <ArrowBackIcon /> </h4> 
              <h3> continue shopping </h3>
          </div>
          <div className="cart-icon">
            <h4> <ShoppingCartIcon />  </h4> 
            <p> {totalItems} </p> 
          </div>
        </div>

         <Divider />

        <div className='main-cart'>
            <h4> Shopping Cart</h4>
            <p> You have <span className='total-items-count'> {totalItems}</span> items in shopping cart</p>

            <div className='cart-items'>
                <div className="cart-items-container">
                    <Scrollbars>
                        {
                            item.map((currItem) => {
                                return <Items key = {currItem.id} {...currItem}/>
                            })
                        }
                    </Scrollbars>
                </div>
            </div>

        </div>

        <div className="cart-total">
            <h3>Cart Total: <span>{totalAmount}</span></h3>
            <button>checkout</button>
            <button className="clearCart" onClick = {() => clearCart()}>Clear Cart</button>
        </div>
    </div> 
    </>
  )
}

export default MainCart;
