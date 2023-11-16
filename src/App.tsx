import './App.css';
import Lotofacil from './pages/timemania';
import Megasena from './pages/Megasena';
import { Provider } from './contexts/contexto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrregando from './pages/Quina';
import Quina from './pages/Quina';
function App() {
  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}

function Rotas(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Carrregando />} />
        <Route path='/' element={<Megasena />} />
        <Route path='/megasena' element={<Megasena />} />
        <Route path='/timemania' element={<Lotofacil />} />
        <Route path='/quina' element={<Quina />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
