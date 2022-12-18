import classes from './Cart.module.css';
import CartModal from '../UI/CartModal';
const Cart = (props) => {
    const cartItems = [
        { id: 'c1', name: 'Quesadilla', amount: 2, price: 8.99 },
        { id: 'c2', name: 'Asada Tacos', amount: 4, price: 2.99 },
        { id: 'c3', name: 'Caldo de Camaron', amount: 1, price: 18.99 },
        { id: 'c4', name: 'Tostada de Ceviche', amount: 1, price: 10.99 },
    ];

    const cartItemsList = <ul className={classes['cart-items']}>{cartItems.map(item => <li>{item.name}</li>)}</ul>
    return (
        <CartModal onDismissCart={props.onDismissCart}>
            {cartItemsList}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$42.96</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onDismissCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </CartModal>
    )
};

export default Cart;