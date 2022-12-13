import {nickName,nivel} from '../../utils/request';
function Game() 
{
    const nomeDoJogador=nickName;
    const nivelDoJogo=nivel;

    function ver()
    {
        console.log("O nome é: ",nomeDoJogador," e o nível é: ",nivelDoJogo);
    }
    return (
        <>
                <button onClick={ver}>
                    Me clique
                </button>
        </>
    );
}

export default Game