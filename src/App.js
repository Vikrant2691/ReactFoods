import Header from "./Layout/Header";
import Meals from "./Layout/Meals";
import { useState } from "react";
import Cart from "./Layout/Cart";
import ContextProvider from "./store/ContextProvider";

function App() {
  const [isModalVisible, setModalVisible] = useState(true);

  const modalVisibilityHandler = () => {
    setModalVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <ContextProvider>
      {!isModalVisible && <Cart modalClickEvent={modalVisibilityHandler} />}
      <Header modalClickEvent={modalVisibilityHandler} />
      <main>
        <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;
