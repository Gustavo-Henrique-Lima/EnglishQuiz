import { useState } from "react";
import {recebe,nickName,nivel} from '../../utils/request';
import { useNavigate } from 'react-router-dom'

function Form() {

    const [nick,setNick]=useState("");
    const [lvl,setLvl]=useState("");
    const navigate=useNavigate();
    
    function enviar()
    {
        recebe(nick,lvl);
        navigate("/game");
    }
    
    return (
        <>
            <div className="englishproject-card">
                <form>
                    <label>Nome:</label>
                    <input onChange={e=>setNick(e.target.value)}></input>
                    <label>Dificuldade</label>
                    <input onChange={e=>setLvl(e.target.value)}></input>
                </form>
                <button onClick={enviar}>Jogar</button>
            </div>
        </>
    );
}


export default Form