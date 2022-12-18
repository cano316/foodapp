import React from "react";
import meals from "../../assets/meals.jpeg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Wed Dev Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A table catered with food." />
            </div>
        </React.Fragment>
    )
}

export default Header;