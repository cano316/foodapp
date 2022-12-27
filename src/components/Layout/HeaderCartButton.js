import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext);
    // take the amount of items in the cart context array
    // cannot use .length() here really because say we have two sushi orders, it's only one item in the array, and the amount would be two.
    // we can use reduce here

    const numOfCartItems = cartCtx.items.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
    }, 0);

    const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);
        // this timer removes the highlighted class from button
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false)
        }, 300);
        // clean up functions
        // if we add items quickly right after each other,
        // we need to reset the timer
        return () => {
            clearTimeout(timer);
        }
    }, [cartCtx.items])

    return (
        <button className={buttonClasses} onClick={props.onClick}>
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