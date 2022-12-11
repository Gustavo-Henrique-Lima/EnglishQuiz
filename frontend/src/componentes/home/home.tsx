import { useNavigate } from 'react-router-dom'
import Footer from '../footer/footer';
import Instrucao from '../instructions/instrucao';
import './styles.css'

function Home()
{
    const navigate=useNavigate();

    function irParaRanking()
    {
        navigate("/ranking");
    }

    function irParaPartida()
    {
        navigate("/partida");
    }
    
    return(
        <>
            <h1>Super Quizz English 2000</h1>
            <div className="container">
                <Instrucao/>
                <div className="card">
                    <button className="btn" onClick={irParaRanking}>
                        Ranking
                    </button>
                    <button className="btn" onClick={irParaPartida}>
                        Play
                    </button>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Home