import "./ProductCard.css";

export default function ProductCard({
  data: { name, category, price, description },
}) {
  const productName = {
    color: "red",
    padding: "10px",
    backgroundColor: "black",
  };
  return (
    <div className="container">
      <h3 className="product" style={productName}>
        {name}
      </h3>
      <p className="category">{category}</p>
      <h4 className="price">{price}</h4>
      <p className="description">{description}</p>
    </div>
  );
}
