import axios from "axios";
import "../css/pesq.css";
import { useState } from "react";

function Pesquisa() {
    const [pesq, setPesq] = useState(""); // Nome do Pokémon a ser pesquisado
    const [pokepesq, setPokepesq] = useState(null); // Dados do Pokémon pesquisado

    const pesquisa = () => {

        if (!pesq.trim()) {
            console.log("Digite um nome válido!");
            return;
        }

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pesq.toLowerCase()}`)
            .then((response) => {
                setPokepesq(response.data);
            })
            .catch(() => {
                console.log("Deu ruim, Pokémon não encontrado!");
                setPokepesq(null);
            });
    };

    const fechar = () => {
        setPokepesq(null);
    };

    const getPokemonGif = (name) => {
        return `https://play.pokemonshowdown.com/sprites/ani/${name.toLowerCase()}.gif`;
    };

    return (
        <>
            <div className="Bar">
                <div className="pesq">
                    <input
                        type="text"
                        placeholder="Nome do Pokémon"
                        value={pesq}
                        onChange={(e) => setPesq(e.target.value)}
                    />
                </div>

                <div className="btn">
                    <button onClick={pesquisa}>Buscar</button>
                </div>
            </div>

            {pokepesq && (
            
            <div className="resutado">
                <div className="pkmns">
                    <button className="btn" onClick={fechar}>
                        x
                    </button>
                    <h1 className="TitlePesq">{pokepesq.name}</h1>
                    <img
                        className="imgpoke"
                        src={getPokemonGif(pokepesq.name)}
                        alt={pokepesq.name}
                        
                    />
                    <div className="info">
                        <p>Altura: {pokepesq.height}</p>
                        <p>Peso: {pokepesq.weight}</p>
                        <p>Tipos:</p>

                        <ul>
                            {pokepesq.types.map((type) => (
                                <li key={type.type.name}>{type.type.name}</li>
                            ))}
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
            )}
        </>
    );
}

export default Pesquisa;
