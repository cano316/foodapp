import React from "react";
import classes from './CartModal.module.css';
import Card from "./Card";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}></div>
    )
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            {props.children}
        </Card>
    )
};

const CartModal = (props) => {
    return (
        <React.Fragment>
            {createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
            {createPortal(<ModalOverlay />, document.getElementById("modal-overlay"))}
        </React.Fragment>
    )
}

export default CartModal;