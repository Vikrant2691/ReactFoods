import Context from "../store/cart-context";
import classes from "./Cart.module.css";
import CartModal from "./CartModal";
import CartItem from "./CartItem";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(Context);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHander = (item) => {};
  const cartItemRemoveHander = (id) => {};

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.itemQuantity}
          price={item.price}
          onRemove={cartItemRemoveHander.bind(null, item.id)}
          onAdd={cartItemAddHander(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <CartModal clickEvent={props.modalClickEvent}>
      <div className={props.className}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.modalClickEvent}
          >
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </CartModal>
  );
};

export default Cart;
