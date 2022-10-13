import { useContext } from "react";
import Context from "../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(Context);

  const cartItemCount =
    cartCtx.items.length ;

  return (
    <button className={classes.button} onClick={props.clickEvent}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
