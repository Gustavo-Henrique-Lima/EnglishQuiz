import './styles.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import 'react-dropdown/style.css';
import { CaretCircleDown, CaretCircleUp } from 'phosphor-react'
import axios from 'axios';
import { Ranking } from '../../models/ranking';
import { BASE_URL } from '../../utils/request';

function TabelaRanking() {
    const navigate = useNavigate();
    const [expandiu, setExpandiu] = useState(false);
    const filtros = ['Easy', 'Hard', 'Expert'];
    const abaixar = !expandiu;
    const subir = expandiu;
    const [valor, setValor] = useState("Easy");
    const [historicoPartidas, setHistorico] = useState<Ranking[]>([]);
    
    useEffect(() => {
        axios.get(`${BASE_URL}/ranking?lvl=${valor}`).then((response) => {
            setHistorico(response.data);
        }).catch(error => {
          alert(error)
        });
      }, [valor]);

      function irParaPaginaInicial() {
        navigate("/")
    }

    function IrParaPartida() {
        navigate("/partida")
    }

    return (
        <>
            <div className="cabeca">
                <button className="btn" onClick={irParaPaginaInicial}>
                    Back
                </button>
                <h1>Ranking</h1>
                <button className="btn" onClick={IrParaPartida}>
                    Play
                </button>
            </div>
            <div className="englishproject-card">
                <div className="cabeca">
                    <h2 className="englishproject-ranking-title">Difficulty chosen: {valor}</h2>
                    <div>
                        <button onClick={() => setExpandiu(!expandiu)} className="filter">
                            {valor}
                            {abaixar && <CaretCircleDown size={28} />}
                            {subir && <CaretCircleUp size={28} />}
                        </button>
                        {expandiu &&
                            <div>
                                <ul>
                                    {filtros.map(option => (
                                        <li onClick={() => setValor(option)} key={option}>{option}</li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <table className="englishproject-ranking-table">
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Nickname</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                historicoPartidas.map(p => {
                                    return (
                                        <tr key={p.id}>
                                            <td>#{historicoPartidas.indexOf(p)+1}</td>
                                            <td>{p.nickname}</td>
                                            <td>{p.pontuacao}/10</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}


export default TabelaRanking