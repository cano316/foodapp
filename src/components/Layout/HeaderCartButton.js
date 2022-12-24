import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    // take the amount of items in the cart context array
    // cannot use .length() here really because say we have two sushi orders, it's only one item in the array, and the amount would be two.
    // we can use reduce here
    const numOfCartItems = cartCtx.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount
    }, 0);
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numOfCartItems}
            </span>
        </button>
    )
};

export default HeaderCartButton;