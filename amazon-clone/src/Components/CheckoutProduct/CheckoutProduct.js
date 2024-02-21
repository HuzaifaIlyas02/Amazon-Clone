import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";
import { useSpring, animated } from "react-spring"; // Import useSpring and animated from react-spring

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const [showNotification, setShowNotification] = useState(false);

  const removeFromBasket = () => {
    // Remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

    setShowNotification(true);

    // Hide the notification after 10 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // 1 seconds
  };

  const notificationAnimation = useSpring({
    from: { top: -100, opacity: 0 }, // Initial position above the viewport
    to: {
      top: showNotification ? 20 : -100, // Adjust the final position of the notification
      opacity: showNotification ? 1 : 0,
    }, // Show notification with animation
  });

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt={title} />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Cart</button>
        )}
      </div>

      {/* Animated notification */}
      <animated.div style={notificationAnimation} className="notification">
        <div className="notification_content">
          <p>Item Removed From Cart</p>
        </div>
      </animated.div>
    </div>
  );
}

export default CheckoutProduct;
