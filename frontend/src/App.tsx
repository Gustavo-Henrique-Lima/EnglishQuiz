import './App.css'
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import TabelaRanking from './componentes/ranking/ranking';
import Partida from './componentes/partida/partida';
import Home from './componentes/home/home';

function App() {
  return(
    <>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/ranking" element={<TabelaRanking/>}></Route>
            <Route path="/partida" element={<Partida/>}></Route>
          </Routes>
        </div>
    </>
  )
}

export default App