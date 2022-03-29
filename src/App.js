import React, {useState} from 'react';

import Header from './components/Header'
import Footer from './components/Footer'

import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {

 // Crear listado de productos

 // Los states no se pueden modificar directamente. 
 // Debe hacerse a través de useState o anteriormente setState

const [productos, guardarProductos ]= useState([
  {id:1, nombre: 'Camisa React JS',precio: 50},
  {id:2, nombre: 'Pantalón React JS',precio: 150},
  {id:3, nombre: 'Blazer React JS',precio: 120},
  {id:4, nombre: 'Chaqueta React JS',precio: 250}
]);

// State para el carrito de compras

const [carrito, agregarProducto] = useState ([]);


// Obtener la fecha

const fecha = new Date().getFullYear();

 return (
    // eslint-disable-next-line react/jsx-no-undef
    <div>

      <Header
          titulo = 'Tienda Virtual'
          numero = "20"
      />
    

    <h1>Lista de Productos</h1>
    { productos.map( producto => (
      <Producto 
          key = {producto.id}
          producto =  { producto }
          carrito = {carrito}
          productos = {productos}
          agregarProducto = {agregarProducto}  />
    ))}

    <Carrito 
        carrito = {carrito}
        agregarProducto = {agregarProducto}
    />

    <Footer 
    
      fecha = {fecha}
    
    />
    </div>

);
}

export default App;
