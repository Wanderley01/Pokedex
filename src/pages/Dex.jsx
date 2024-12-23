import React from "react";  
import back from '../img/botao-voltar.png';
import { useNavigate } from 'react-router-dom'; 
import '../css/dex.css'; 
function Dex() {
    const navigate = useNavigate();

    return (
        <div>
            
            <div className="back">
            <button onClick={() => (navigate('/'))}>
                <img  src={back} width={20}/>
            </button>
            </div>

            <div className="querybar">

            </div>

            <div className="dex">

            </div>
        </div>
    );
}

export default Dex;