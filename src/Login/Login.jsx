import React from 'react';

export function Login() {
  return (
    <div id='login-page'>
      <div id='login-container'>
        <h3>Login</h3>
        <form action=''>
          <input
            type='text'
            name='user'
            id='user'
            placeholder='Usuario'
          />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Contraseña'
          />
          <button>
            <a href='dash'>Entrar</a>
          </button>
        </form>
      </div>
    </div>
  );
}
