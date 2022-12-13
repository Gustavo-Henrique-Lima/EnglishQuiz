import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import {Select} from "@mui/material"
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
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
                <TextField label="Nome" variant="outlined" value={nick} onChange={e=>setNick(e.target.value)} />
                <InputLabel id="lvl-select-label">Choose</InputLabel>
                <Select
                    labelId="lvl-select-label"
                    id="lvl-simple-select"
                    value={lvl}
                    onChange={e=>setLvl(e.target.value)}
                >
                    <MenuItem value={"Easy"}>Easy</MenuItem>
                    <MenuItem value={"Hard"}>Hard</MenuItem>
                    <MenuItem value={"Expert"}>Expert</MenuItem>
                </Select>
                <Button onClick={enviar}>Jogar</Button>
            </div>
        </>
    );
}


export default Form