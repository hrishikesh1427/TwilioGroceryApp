// src/components/Product.js

import React from 'react';

const Product = ({ product, quantity, setQuantity }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <label>
        Quantity:
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(11).keys()].map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Product;



