import { useNavigate } from 'react-router-dom'
import './styles.css'

function Home()
{
    const navigate=useNavigate();
    function handleClick()
    {
        navigate("/ranking")
    }
    function irParaPartida()
    {
        navigate("/partida")
    }
    return(
        <>
        <h1>Home</h1>
        <div>
            <button onClick={handleClick}>
                Ranking
            </button>
            <button onClick={irParaPartida}>
                Jogar
            </button>
        </div>
        </>
    )
}

export default Home