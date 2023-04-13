export const reducer = (state, action) => {
    if(action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            item: state.item.filter((currEle) => {
                return currEle.id != action.payload;
            })
        }
    }

    if(action.type === 'CLEAR_CART') {
        return {
            ...state,
            item: [],
        }
    }

    if(action.type === 'QUANTITY_INCREMENT') {
            let updatedCart = state.item.map((currEle) => {
                if(currEle.id === action.payload) {
                    return{
                        ...currEle,
                        quantity: currEle.quantity + 1
                    }
                }
                return currEle;
            })
        return {
            ...state,
            item: updatedCart,
        }
    }

    if(action.type === 'QUANTITY_DECREMENT') {
        let updatedCart = state.item.map((currEle) => {
            if(currEle.id === action.payload) {
                return{
                    ...currEle,
                    quantity: currEle.quantity - 1,
                }
            }
            return currEle;
        }).filter((currEle) => {
            return currEle.quantity != 0;
        })
        return {
            ...state,
            item: updatedCart,
        }
     }
    if(action.type === "GET_TOTAL") {
        let {totalItems, totalAmount} = state.item.reduce((accum, curVal) => {
            let {price, quantity} = curVal;
            accum.totalAmount += price*quantity

            accum.totalItems += quantity;
            return accum;
        }, {
            totalItems: 0,
            totalAmount: 0,
        });
        return {
            ...state,
            totalItems,
            totalAmount,
        }
    }
    return state;
         
}
