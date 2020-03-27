import React from 'react';

function Productos ({shoppingCart, product, products, addProduct}) {  

  const { id, name, price } = product;
  
  const addCart = id => {
    console.log({product_id: id});
    const product = products.filter(product => product.id === id);
    addProduct([
      ...shoppingCart,
      ...product
    ]);
  }

  const removeCart = id => {
    const products = shoppingCart.filter(product => product.id !== id);
    addProduct(products);
  }
  
  return (
    <div className="Productos">
      { id }
      { name }
      { price }
      {
        ! products
        ?
          <button
            type="button"
            onClick={() => removeCart(id) }>
              Eliminar 
          </button>
        :
        <button
          type="button"
          onClick={() => addCart(id) }>
          Comprar 
        </button>
      }
    </div>
  );
}

export default Productos;
