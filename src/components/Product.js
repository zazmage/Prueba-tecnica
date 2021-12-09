import { ProductCard } from "../styles/StyledComp";

const Product = ({ props: { id, name, description, price, imgUrl } }) => {
  return (
    <ProductCard>
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>R$ {price}.00</p>
      <p className="description">{description}</p>
      <button>COMPRAR</button>
    </ProductCard>
  );
};

export default Product;
