import { useContext, useEffect, useState } from "react";
import Context from "../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(Context);

  const cartItemCount = cartCtx.items.length;

  const buttonClass = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  const items = cartCtx.items;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClass} onClick={props.clickEvent}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
