import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector( state => state.cart);

  const dispach = useDispatch();

  const increment = (id) => {
    dispach({
      type: "addToCart",
      payload: {id}
    });
  }

    const decrement = (id) => {
      dispach({
        type: "decrement",
        payload: { id },
      });
    };

    const deleteHandler = (id) => {
      dispach({
        type: "deleteFromCart",
        payload: { id },
      });
    };


  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItems
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              qty={item.qty}
              id={item.id}
              key={item.id}
              increment={increment}
              decrement={decrement}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1> Cart is Empty Yet! </h1>
        )}
      </main>
      <aside>
        <div>
          <h2>Subtotal: ${456}</h2>
          <h2>Shipping: ${456}</h2>
          <h2>Tax: ${20}</h2>
          <h2>Total: ${34534634}</h2>
        </div>
      </aside>
    </div>
  );
};

const CartItems = ({
  imgSrc,
  name,
  price,
  qty,
  increment,
  decrement,
  deleteHandler,
  id,
}) => (
  <div className="CartItems">
    <img src={imgSrc} alt="Item" />
    <article>
      <h2> {name}</h2>
      <h2>${price}</h2>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <div>
      <AiFillDelete onClick={ () => deleteHandler(id) } />
    </div>
  </div>
);

export default Cart;
