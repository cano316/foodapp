import React, { useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css'
const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(false)
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        //since this is a form, we still have to prevent the default behaviour
        e.preventDefault();
        const enteredAmount = +amountInputRef.current.value;
        if (enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmount);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!setAmountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
};

export default MealItemForm;