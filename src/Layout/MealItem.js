import { useContext } from "react";
import Context from "../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartContext = useContext(Context);
  const price = `$${props.mealPrice.toFixed(2)}`;

  const cartContextHandler = (itemQuantity) => {
    const item = {
      id: props.id,
      name: props.mealName,
      description: props.mealDescription,
      price: props.mealPrice,
      itemQuantity: itemQuantity,
    };

    console.log(item.price);

    cartContext.addItem(item);
  };

  return (
    <div className={classes.meal}>
      <h3>{props.mealName}</h3>
      <describe className={classes.description}>
        {props.mealDescription}
      </describe>
      <div className={classes.price}>{price}</div>
      <MealItemForm mealId={props.mealId} onUserSubmit={cartContextHandler} />
    </div>
  );
};

export default MealItem;
