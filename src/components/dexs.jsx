import axios from "axios";
import '../css/list.css';
import { useState } from "react";

function List() {

    const [pokemon, setPokemon] = useState([]);


    return(

        <div className="boxList">
            <div className="pkmn">
                <h2>
                    id
                </h2>
                <h2>Pikachu</h2>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu"/>
                <h2>
                    Tipo:
                </h2>
                <h3>
                    Eletrico
                </h3>

                <div>
                    <button className="more">
                        Mais Detalhes
                    </button>
                </div>
            </div>
        </div>

    );
}

export default List;



