import React from "react";
import { ProductsList, ProductsWrapper } from "../../styles/Products/Products";
import { products } from "../../utils/products.json";

const Products = () => {
  return (
    <ProductsWrapper>
      {products.map((product) => (
        <ProductsList key={product.id}>
          <div className="cardHeader">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="cardBody">
            <strong>{product.name}</strong>
            <strong className="secondaryText">{product.price}</strong>
          </div>
          <div className="cardFooter">
            <button className="button">Comprar</button>
          </div>
        </ProductsList>
      ))}
    </ProductsWrapper>
  );
};

export default Products;
