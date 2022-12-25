import {nickName,nivel} from '../../utils/request';
import axios from 'axios';
import { useEffect, useState } from "react";
import { BASE_URL } from '../../utils/request';
import { Pergunta } from '../../models/pergunta';

function Game() 
{
    const nomeDoJogador=nickName;
    const nivelDoJogo=nivel;
    const [perguntas, setPerguntas] = useState<Pergunta[]>([]);

    useEffect(()=>{
        axios.get(`${BASE_URL}/perguntas?dificuldade=${nivel}`)
        .then(response=>{
            console.log(response.data)
            setPerguntas(response.data)
        }).catch(error => {
            alert(error)
          });
      },[]);

    return (
        <>
                <div>
                    <table className="englishproject-ranking-table">
                        <thead>
                            <tr>
                                <th>Audio</th>
                                <th>Alternativa 1</th>
                                <th>Alternativa 2</th>
                                <th>Alternativa Certa</th>
                                <th>Dificuldade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                perguntas.map(p => {
                                    const som=`/sons/${nivel}/${p.som}.mp3`;
                                    return (
                                        <tr key={p.id}>
                                            <td>
                                                <audio controls>
                                                    <source src={som}/>
                                                        Your browser does not support the audio element.
                                                </audio>
                                                </td>                                       
                                            <td>{p.alternativa1}</td>
                                            <td>{p.alternativa2}</td>
                                            <td>{p.certo}</td>
                                            <td>{p.dificuldade}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
        </>
    );
}

export default Game