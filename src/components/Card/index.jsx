import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/modules/cart/actions";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={product.img} alt="Produto." />
      <div className="info">
        <span>{product.name}</span>
        <p>R$ {product.price},00</p>
      </div>
      <button onClick={() => dispatch(addProduct(product))}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Card;
