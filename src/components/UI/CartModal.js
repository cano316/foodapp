import React from "react";
import classes from './CartModal.module.css';
import { createPortal } from "react-dom";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}></div>
    )
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
};

const CartModal = (props) => {
    return (
        <React.Fragment>
            {createPortal(<Backdrop onClick={props.onDismissCart} />, document.getElementById("overlays"))}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("overlays"))}
        </React.Fragment>
    )
}

export default CartModal;