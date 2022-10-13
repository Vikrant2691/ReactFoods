import { useReducer } from "react";
import Context from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const totalAmount =
      parseInt(state.totalAmount) +
      parseInt(action.item.price) * parseInt(action.item.itemQuantity);

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let updatedItems

    if (existingCartItemIndex >= 0) {
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingCartItem,
        itemQuantity:
          parseInt(existingCartItem.itemQuantity) +
          parseInt(action.item.itemQuantity),
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    
      
    } else {
      console.log("existingCartItemIndex " + existingCartItemIndex);
      updatedItems = state.items.concat(action.item);
      
    }
    return {
      items: updatedItems,
      totalAmount: totalAmount,
    };

    
  }
  return defaultCartState;
};

const ContextProvider = (props) => {
  console.log("defaultCartState " + defaultCartState.totalAmount);
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);
  console.log(cartState);
  const addItemHandler = (item) => {
    console.log("I am here  " + item);
    return cartDispatch({ type: "ADD_ITEM", item: item });
  };
  const removeItemHandler = (id) => {
    cartDispatch({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <Context.Provider value={cartContext}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
