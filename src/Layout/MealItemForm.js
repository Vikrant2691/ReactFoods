import React, { useRef } from "react";
import Input from "./Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const itemQuanity = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("itemQuanity.current.value" + itemQuanity.current.value);
    props.onUserSubmit(itemQuanity.current.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        label="Amount"
        ref={itemQuanity}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "100",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
