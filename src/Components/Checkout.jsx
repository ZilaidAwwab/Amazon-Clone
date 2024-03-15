import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h3>Hello, {!user ? "Guest" : user.email}</h3>
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
