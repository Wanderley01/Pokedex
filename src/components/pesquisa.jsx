import axios from "axios";
import "../css/pesq.css";
import { useState } from "react";
// Coloquei o estilo aqui também, para ser mais águl eu sei o chat denovo


function Pesquisa() {
    const [pesq, setPesq] = useState(""); 
    const [pokepesq, setPokepesq] = useState(null); 

    const typeColors = {
        fire: "#FF4422",
        water: "#3399FF",
        grass: "#77CC55",
        electric: "#FFCC33",
        bug: "#AABB22",
        poison: "#AA5599",
        flying: "#8899FF",
        normal: "#AAAA99",
        ground: "#DDBB55",
        rock: "#BBAA66",
        psychic: "#FF5599",
        ghost: "#6666BB",
        ice: "#66CCFF",
        dragon: "#7766EE",
        dark: "#775544",
        steel: "#AAAABB",
        fairy: "#EE99EE",
        fighting: "#BB5544",
    };

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
                            <ul>
                                {pokepesq.types.map((type) => (
                                    <li
                                        key={type.type.name}
                                        style={{
                                            backgroundColor: typeColors[type.type.name] || "#000",
                                            color: "#FFF",
                                            padding: "5px 10px",
                                            borderRadius: "5px",
                                            marginRight: "5px",
                                            display: "inline-block",
                                        }}
                                    >
                                        {type.type.name}
                                    </li>
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
