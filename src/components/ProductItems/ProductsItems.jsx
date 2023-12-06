import React from "react";
import { ProductsList, ProductsWrapper } from "../../styles/Products/Products";
import products from "../../json/products.json";

const ProductsItems = () => {
  return (
    <>
      <h2 className="text-center mt-5">Productos</h2>
      <ProductsWrapper>
        {products.products.map((item) => (
          <ProductsList key={item.id}>
            <div className="card">
              <div className="cardHeader">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cardBody">
                <span className="primaryText">{item.name}</span>
                <span className="secondaryText">{item.price}</span>
              </div>
              <div className="cardFooter">
                <a href="/">Agregar al carrito</a>
              </div>
            </div>
          </ProductsList>
        ))}
      </ProductsWrapper>
    </>
  );
};
export default ProductsItems;
