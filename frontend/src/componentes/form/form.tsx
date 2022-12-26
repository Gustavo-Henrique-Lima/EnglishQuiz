import { useState } from "react";
import {recebe,nickName,nivel} from '../../utils/request';
import { useNavigate } from 'react-router-dom'
import './styles.css'

function Form() {

    const [nick,setNick]=useState("");
    const [lvl,setLvl]=useState("");
    const navigate=useNavigate();
    
    function enviar()
    {
        alert(lvl)
        if(nick.length!=0 && lvl.length!=0)
        {
            recebe(nick,lvl);
            navigate("/game");
        }
        else{
            alert("Preencha todos os campos")
        }
    }
    
    return (
        <>
            <div className="englishproject-card">
                <form>
                    <label>Nome</label>
                    <input className="campo_nome"placeholder="Digite seu nick" type="text" onChange={e=>setNick(e.target.value)}></input><br></br>
                    <label className="campo">Dificuldade</label>
                    <div>
                        <label className="radio">
                            <input type="radio" value="Easy" onChange={e=>setLvl("Easy")} />
                            Easy
                        </label>
                    </div>
                    <div >
                        <label className="op" >
                            <input  type="radio" value="Hard" onChange={e=>setLvl("Hard")} />
                            Hard
                        </label>
                    </div>
                    <div >
                        <label className="op2" >
                            <input  type="radio" value="Expert" onChange={e=>setLvl("Expert")} />
                            Expert
                        </label>
                    </div>
                </form>
                <button onClick={enviar}>Jogar</button>
            </div>
        </>
    );
}


export default Form