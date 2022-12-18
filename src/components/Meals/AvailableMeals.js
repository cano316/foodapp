import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import DUMMY_MEALS from "./dummy-meals";
const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => {
        return <MealItem
            //Here I want to use spread operator to be succinct,
            // but one could also do something like
            // {name: meal.name, description: meal.description, price: meal.price, key: meal.id} or
            // name={meal.name} description={meal.description} etc
            {...meal}
            key={meal.id}
        />
    })
    return (
        // <Card className={classes.meals}>
        //     <ul>
        //         {mealsList}
        //     </ul>
        // </Card>
        // It's better to lay it out this way, because when we inspect the elements, it adds more
        // semantic meaning. Otherwise, it would just show as another div. 
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;