import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css"
const MealItem = (props) => {
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <span className={classes.price}>${props.price.toFixed(2)}</span>
            </div>
            <div>
                <MealItemForm id={props.id} />
            </div>
        </li>
    )
};

export default MealItem;