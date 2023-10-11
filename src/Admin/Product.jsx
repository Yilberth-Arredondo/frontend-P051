import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Product() {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
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
  }, [id]);
  if (!productos) return null;
  console.log('productos: ', productos);
  return (
    <>
      {productos.length > 1 && (
        <div className='product-container'>
          <h2 className='title'>{productos[id].nombre}</h2>
          <img
            src=''
            alt={productos[id].nombre}
            className='image'
          />
          <h4>{productos[id].descripcion}</h4>
        </div>
      )}
    </>
  );
}
