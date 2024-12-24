import axios from "axios";
import "../css/list.css";
import { useEffect, useState } from "react";

function List() {
    const [pokelist, setPokelist] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=151') // Exemplo para 151 Pokémon
            .then(response => {
                setPokelist(response.data.results);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
            });
    }, []);

    const getPokemonGif = (name) => {
        return `https://play.pokemonshowdown.com/sprites/ani/${name.toLowerCase()}.gif`;
    };

    return (
        <div className="boxList">
            {pokelist.length > 0 ? (
                pokelist.map((pokemon) => (
                    <div key={pokemon.name} className="pkmn">
                        <h1>{pokemon.name}</h1>
                        <img
                            src={getPokemonGif(pokemon.name)}
                            alt={`GIF de ${pokemon.name}`}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/20"; // Placeholder caso o GIF não exista
                            }}
                        />
                    </div>
                ))
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default List;
