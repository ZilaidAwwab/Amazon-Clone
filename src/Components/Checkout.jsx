import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="src\assets\images\ad_image.jpg" />
        <div>
          <h2 className="checkout_title">Your Shopping basket</h2>

          {basket.map((item) => (
            <CheckoutProducts
              key={`${item.id}-${Math.floor(Math.random() * 1000000)}`}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
