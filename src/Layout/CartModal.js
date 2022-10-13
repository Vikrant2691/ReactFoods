import classes from "./CartModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.clickEvent} />;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const CartModal = (props) => {
  return (
    <>
      <Backdrop clickEvent={props.clickEvent} />
      <Overlay>{props.children}</Overlay>
    </>
  );
};

export default CartModal;
