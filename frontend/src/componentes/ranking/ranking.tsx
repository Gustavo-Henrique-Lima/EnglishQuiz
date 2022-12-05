import './styles.css'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Footer from '../footer/footer';

function TabelaRanking()
{
    const navigate=useNavigate();
    function handleClick()
    {
        navigate("/")
    }
    return(
        <>
        <h1>Ranking</h1>
        <button onClick={handleClick}>
                Home
            </button>
        <div className="englishproject-card">
                <h2 className="englishproject-ranking-title">Ranking</h2>
                <div>
                <table className="englishproject-ranking-table">
        <thead>
            <tr>
            <th>Posição</th>
            <th>Nickname</th>
            <th>Pontuação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>#341</td>
            <td>Anakin</td>
            <td>9</td>
            </tr>
            <tr>
            <td>#341</td>
            <td>Anakin</td>
            <td>8</td>
            </tr>
            <tr>
            <td>#341</td>
            <td>Anakin</td>
            <td>7</td>
            </tr>
        </tbody>
        </table>
        </div>
        </div>
        </>
    )
}


export default TabelaRanking