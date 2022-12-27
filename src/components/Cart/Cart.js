import classes from './Cart.module.css';
import CartModal from '../UI/CartModal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    };
    const cartItemAddHandler = (item) => {
        // this allows us to click on the '+' in the cart modal to increase the amount
        cartCtx.addItem({ ...item, amount: 1 })
    };

    const cartItemsList = (
        <ul className={classes['cart-items']}>
            {cartItems.map(item => <CartItem
                key={item.id}
                price={item.price}
                amount={item.amount}
                name={item.name}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />)}
        </ul>
    );
    // check to see if user has any items in their cart
    const hasItems = cartItems.length > 0;

    return (
        <CartModal onDismissCart={props.onDismiss}>
            {cartItemsList}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onDismiss}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </CartModal>
    )
};

export default Cart;