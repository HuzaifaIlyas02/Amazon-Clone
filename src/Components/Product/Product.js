import React, { useState, useEffect } from "react";
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

    // Hide the notification after 10 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 7000); // 5 seconds
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  // Define animation properties
  const notificationAnimation = useSpring({
    from: { top: -100, opacity: 0 }, // Initial position above the viewport
    to: {
      top: showNotification ? 20 : -100, // Adjust the final position of the notification
      opacity: showNotification ? 1 : 0,
    }, // Show notification with animation
  });

  return (
    <div className="product">
      <div className="product_info">
        <p className="">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
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
