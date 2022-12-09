import './styles.css'
import {useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import 'react-dropdown/style.css';
import Partida from '../partida/partida';
import { CaretCircleDown,CaretCircleUp } from 'phosphor-react'


function TabelaRanking()
{
    const navigate=useNavigate();
    const [expandiu,setExpandiu]=useState(false);
    const filtros=['Easy','Hard','Expert'];
    const abaixar=!expandiu;
    const subir=expandiu;
    const nome="Dificulty";
    const [valor,setValor]=useState(nome);
    useEffect(()=>{
        console.log("TESTE")
      },[]);
    function irParaPaginaInicial()
    {
        navigate("/")
    }
    
    function IrParaPartida()
    {
        navigate("/partida")
    }
    return(
        <>
        <div className="cabeca">
                <button className="btn" onClick={irParaPaginaInicial}>
                    Voltar
                </button>
                <h1>Ranking</h1>
                <button className="btn" onClick={IrParaPartida}>
                    Jogar
                </button>
        </div>
            <div className="englishproject-card">
                    <div className="cabeca">
                        <h2 className="englishproject-ranking-title">{valor}</h2>
                        <div>
                                <button onClick={()=>setExpandiu(!expandiu)} className="filter">
                                    {valor}
                                    {abaixar &&  <CaretCircleDown size={28}/>}
                                    {subir && <CaretCircleUp size={28}/>}
                            </button>
                            {expandiu &&
                                    <div>
                                    <ul>
                                        {filtros.map(option=>(
                                            <li onClick={()=>setValor(option)} key={option}>{option}</li>
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
    );
}


export default TabelaRanking