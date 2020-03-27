import React, { Fragment, useState } from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';

function App() {

  // crear lista de productos
  const [ products,  setProducts ] = useState([
    { id: 1, name: 'Camisas ReactJS', price: 50 },
    { id: 2, name: 'Camisas Vue', price: 40 },
    { id: 3, name: 'Camisas NodeJs', price: 30 },
    { id: 4, name: 'Camisas Angular', price: 20 }
  ])
  // state para un carrito de compras
  const [shoppingCart, addProduct] = useState([]);

  return (
    <div className="App">
      <Header 
        title='Tienda virtual'
      />
      <h1>Lista de productos</h1>
      {products.map(p => (
        <Product
          key={p.id}
          shoppingCart={shoppingCart}
          product={p}
          products={products}
          addProduct={addProduct}
          />
          ))}
      <ShoppingCart 
        shoppingCart={shoppingCart}
        addProduct={addProduct}
        />
      <Footer />
    </div>
  );
}

export default App;
