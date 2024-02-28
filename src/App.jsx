import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import PokedexIdPage from './pages/PokedexIdPage';
import PokedexPage from './pages/PokedexPage';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {

  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage/>}/>
          <Route path='/pokedex/:id' element={<PokedexIdPage/>}/>
        </Route>
      </Routes>
  )
}

export default App;
