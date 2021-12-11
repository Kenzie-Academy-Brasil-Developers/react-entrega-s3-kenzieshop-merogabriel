import Card from "../../components/Card";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Products = () => {
  const products = useSelector((store) => store.products);
  const cart = useSelector((store) => store.cart);
  const history = useHistory();

  return (
    <div className="App-header">
      <header>
        <h1>Kenzie Shop</h1>
        <h2>
          Carrinho: {cart.length} {cart.length !== 1 ? "itens" : "item"}
        </h2>
      </header>

      <div className="list">
        {products.map((product) => (
          <Card key={product.name} product={product} />
        ))}
      </div>

      <div className="wrapper">
        <button className="botaoCarrinho" onClick={() => history.push("/cart")}>
          Carrinho {cart.length} itens
        </button>
      </div>
    </div>
  );
};

export default Products;
