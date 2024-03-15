import React from "react";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <div className="subtotal_items">
        <p className="num">Subtotal ({basket?.length} items):</p>
        <NumericFormat
          className="formator"
          renderText={(value) => (
            <>
              <strong>{value}</strong>
            </>
          )}
          value={getBasketTotal(basket)}
          thousandSeparator={true}
          decimalScale={2}
          fixedDecimalScale={true}
          prefix="$"
        />
      </div>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
