export default function ProductCard({
  data: { name, category, price, description },
}) {
  return (
    <div>
      <h3> {name} </h3>
      <p>{category}</p>
      <h4>{price}</h4>
      <p>{description}</p>
    </div>
  );
}
