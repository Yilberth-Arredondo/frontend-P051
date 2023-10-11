import React from 'react';

export default function Landing() {
  return (
    <>
      <header id='navbar'>
        <nav>
          <a href='#somospro'>Tienda</a>
          <a href='#somospro'>About</a>
          <p className='logo'> PROYECTO </p>
          <a href='/login'>Login</a>
          <a href='/login'>Carrito</a>
        </nav>
      </header>

      <section id='hero'>
        <h1>
          Contáctanos <br /> Los mejores productos veganos
        </h1>
        <form action=' '>
          <button> Aplica</button>
        </form>
      </section>
      <section id='somospro'>
        <div className='container'>
          <div className='img-container'></div>
          <div className='texto'>
            <h2>
              Los mejores productos
              <span className='coloracento'>
                <br /> veganos
              </span>
            </h2>
            <p>
              {' '}
              Soy Programador, java, Script, HTML, CSS, Node.js, java Más
              de 1 año de experiencia Somos un buen aliado trabajo de grupo
              agradable{' '}
            </p>
          </div>
        </div>
      </section>
      <section id='n'>
        <div className='container'>
          <h2> Mis proyectos</h2>
          <div className='programas'>
            <div className='carta'>
              <h3>Ajedrez</h3>
              <p>
                Pronto tendremos una actualización de nuestros proyectos,
                esperar un rato{' '}
              </p>
              <button>+ info</button>
            </div>
            <div className='carta'>
              <h3>Juegos </h3>
              <p>
                Pronto tendremos una actualización de nuestros proyectos,
                esperar un rato{' '}
              </p>
              <button>+ info</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
