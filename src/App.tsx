import './App.css';
import Lotofacil from './components/Lotofacil';
import Megasena from './components/Megasena';
import { Provider } from './contexts/contexto';
// import Principal from './pages/principal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './pages/principal';
import Carrregando from './components/NOTFOUND/NOTFOUND';
import Quina from './components/Quina';
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
        <Route path='/lotofacil' element={<Lotofacil />} />
        <Route path='/quina' element={<Quina />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
