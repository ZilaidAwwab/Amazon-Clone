import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="src\assets\images\ad_image.jpg" />
        <div>
          <h2 className="checkout_title">Your Shopping basket</h2>
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
