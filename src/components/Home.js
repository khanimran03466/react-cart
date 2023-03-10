import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import "./../styles/home.scss";

const img1 = "https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg";
const img2 =
  "https://static.toiimg.com/thumb/resizemode-4,msid-81328406,imgsize-1399554,width-720/81328406.jpg";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: "1,23,999",
      imgSrc: img1,
      id: "ergrg",
    },
    {
      name: "Mac Book Air",
      price: "1,20,999",
      imgSrc: img2,
      id: "sdcsdvdf",
    },
  ];

  const dispach = useDispatch();

  const addToCardHandler = (options) => {
    dispach({ type: "addToCart", payload: options });
    toast.success("Added to Cart");
  };

  return (
    <div className="home">
      {productList.map((item) => (
        <ProductCard
          key={item.id}
          imgSrc={item.imgSrc}
          name={item.name}
          id={item.id}
          price={item.price}
          handler={addToCardHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p> {name} </p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, id, price, qty: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
