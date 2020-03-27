import React from 'react';
import './carrito.css';
import Product from './Product';

function ShoppingCart ({shoppingCart, addProduct}) {
  return (
    <div className="shoppingCart">
        <h1 className="title">Shopping Cart</h1>
        {shoppingCart.length === 0 
        ?
          <h5>CARRITO VACIO</h5>
        : shoppingCart.map(product => (
            <Product
              key={product.id}
              product={product}
              shoppingCart={shoppingCart}
              addProduct={addProduct}
            />
          ))
        }
    </div>
  );
}

export default ShoppingCart;
