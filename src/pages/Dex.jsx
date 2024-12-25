import React from "react";  
import back from '../img/botao-voltar.png';
import { useNavigate } from 'react-router-dom'; 
import '../css/dex.css';
import Pesquisa from "../components/pesquisa"; 
import Dexs from '../components/dexs';
function Dex() {

    const navigate = useNavigate();

    return (
        <div>
            
            <div className="back">
                <button onClick={() => (navigate('/'))}>
                     Voltar
                </button>
            </div>


            <div className="boxDex">
                <div className="querybar">
                    <Pesquisa/>
                </div>
            </div>


            <div className="Dexs">
                    <Dexs/>
            </div>

            <div className="panination">

            </div>

            <div className="skip">
              <a href="#top">Ir para o topo</a>
            </div>
        </div>
    );
}

export default Dex;