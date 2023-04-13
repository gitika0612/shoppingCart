import React, {createContext, useEffect, useReducer, useState} from "react";
import {product} from './product';
import MainCart from './MainCart';
import {reducer} from './reducer';

export const CartContext = createContext(); 

const initialState = {
    item: product,
    totalItems: 0,
    totalAmount: 0, 
}

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState); 

    const removeItem = (id) => {
        return dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        }); 
    };

    const clearCart = () => {
        return dispatch({
            type: 'CLEAR_CART',
        })
    }

    const increment = (id) => {
        return dispatch({
            type: 'QUANTITY_INCREMENT',
            payload: id,
        })
    }

    const decrement = (id) => {
        return dispatch({
            type: 'QUANTITY_DECREMENT',
            payload: id,
        })
    }

    useEffect(() => {
        dispatch({
            type: "GET_TOTAL"
        })
    }, [state.item])


  return (
    <CartContext.Provider value={{...state, removeItem, clearCart, increment, decrement}}>
        <MainCart/>
    </CartContext.Provider>
  );
};

export default Cart;
