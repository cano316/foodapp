import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,

}

const cartReducer = (state, action) => {
    // this is the new function of the cartReducer and therefore could accept new items
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const itemToRemoveIndex = state.items.findIndex(item => item.id === action.id);
        const itemToRemove = state.items[itemToRemoveIndex];
        const updatedTotalAmount = state.totalAmount - itemToRemove.price;
        let updatedItems;
        // if the item in the cart is one, that means it is the last
        // item in the array, and we must remove it from array completely
        if (itemToRemove.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);

        } else {
            // if the amount is greater than one, we want to keep the item
            // in the array, but decrease the amount on that item
            const updatedItem = { ...itemToRemove, amount: itemToRemove.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[itemToRemoveIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
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