import React, { useContext } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography, Box, Divider, Button } from "@mui/material";
import "./cart.css";
import { CartContext } from "./cart";

const Items = ({id, img, description, title, price, quantity}) => {
    const {removeItem, increment, decrement} = useContext(CartContext);
  return (
    <>
      <div className="item-info">
        <div className="product-image">
          <img src={img} alt="item" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <button>
            {" "}
            <RemoveIcon onClick={() => {decrement(id)}} />{" "}
          </button>
          <input type="text" placeholder={quantity} />
          <button>
            {" "}
            <AddIcon onClick={() => increment(id)} />{" "}
          </button>
        </div>

        <div className="price">
          <h3>{price}</h3>
        </div>

        <div className="remove-item">
          <button>
            {" "}
            <DeleteIcon onClick={() => removeItem(id)}/>
          </button>
        </div>
      </div>

      <Divider />
    </>
  );
};

export default Items;
