import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { Dash } from './Admin/Dash';
import Landing from './Landing/Landing';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />

        <Route
          path='/dash'
          element={<Dash />}
        />

        <Route
          path='/'
          element={<Landing />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
