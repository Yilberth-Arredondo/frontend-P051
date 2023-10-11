import React, { useState, useEffect } from 'react';

export function Dash() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('../db/products.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setProductos(data.productos))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='dash-app'>
      <h2>Productos Veganos</h2>
      <div id='product-list'>
        {productos.map((producto, index) => (
          <a
            href={`producto/${index}`}
            key={index}>
            <div
              className='card'
              key={index}>
              <h4>{producto.nombre}</h4>
              <p>
                <b>Precio: </b>
                {producto.precio} COP
              </p>
              {producto.disponibilidad ? (
                <p>
                  <b>Disponible</b>
                </p>
              ) : (
                <p>
                  <b>No disponible</b>
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
