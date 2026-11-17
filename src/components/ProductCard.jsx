function ProductCard({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}원</p>
    </div>
  );
}

export default ProductCard;