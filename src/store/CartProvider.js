import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,

}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        return {
            items: [...state.items, action.item],
            totalAmount: state.totalAmount + (action.item.price * action.item.amount)
        }
    }
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
    // Here we may want to use a couple different instances of state (that is why we are using context anyway)
    // We MAY even want to use a reducer to manage complex state and pass it to props using context
    const addItemToCartHandler = (item) => {
        dispatchCart({
            type: 'ADD_ITEM',
            item: item
        })
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCart({
            type: 'REMOVE_ITEM',
            id: id
        })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;