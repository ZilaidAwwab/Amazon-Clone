import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price"></p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <div className="product_image">
        <img src={image} />
      </div>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
