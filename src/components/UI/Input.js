import React from "react";
import classes from './Input.module.css'
// we have to forward refs from here to MealItemForm
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={`${classes.input} ${props.input}`}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input
                {...props.input}
                ref={ref}
            />
        </div>
    )
});

export default Input;