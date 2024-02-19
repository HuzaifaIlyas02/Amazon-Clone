import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
import { useSpring, animated } from "react-spring"; // Import useSpring and animated from react-spring
import { Close } from "@material-ui/icons"; // Import Close icon from Material-UI

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [showNotification, setShowNotification] = useState(false);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  // Define animation properties
  const notificationAnimation = useSpring({
    from: { right: -300, opacity: 0 }, // Initial position outside the viewport
    to: {
      right: showNotification ? 0 : -300,
      opacity: showNotification ? 1 : 0,
    }, // Show notification with animation
  });

  return (
    <div className="product">
      <div className="product_info">
        <p className="title">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Cart</button>

      {/* Animated notification */}
      <animated.div style={notificationAnimation} className="notification">
        <div className="notification_content">
          <p>{title} added to basket</p>
          <Close className="close_button" onClick={closeNotification} />
        </div>
      </animated.div>
    </div>
  );
}

export default Product;
