import React from 'react';

export default function Landing() {
  return (
    <>
      <header>
        <div class='container'>
          <p class='logo'> PROYECTO </p>
          <nav>
            <a href='#somospro'>Quienes Somos</a>
            <a href='#n'>Nuestros proyectos</a>
            <a href='/login'>Login</a>
          </nav>
        </div>
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
        <div class='container'>
          <div class='img-container'></div>
          <div class='texto'>
            <h2>
              Los mejores productos
              <span class='coloracento'>
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
        <div class='container'>
          <h2> Mis proyectos</h2>
          <div class='programas'>
            <div class='carta'>
              <h3>Ajedrez</h3>
              <p>
                Pronto tendremos una actualización de nuestros proyectos,
                esperar un rato{' '}
              </p>
              <button>+ info</button>
            </div>
            <div class='carta'>
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
