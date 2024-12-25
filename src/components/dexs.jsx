import axios from "axios";
import "../css/list.css";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function List() {
    const [pokelist, setPokelist] = useState([]);
    const navigate = useNavigate();
    const Cor = {
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

    const fetchPokemonDetails = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
            const pokemonResults = response.data.results;

            const detailedPokemon = await Promise.all(
                pokemonResults.map(async (pokemon) => {
                    const details = await axios.get(pokemon.url);
                    return {
                        id: details.data.id,
                        name: pokemon.name,
                        types: details.data.types.map((type) => type.type.name),
                        gif: `https://play.pokemonshowdown.com/sprites/ani/${pokemon.name.toLowerCase()}.gif`,
                    };
                })
            );

            setPokelist(detailedPokemon);
        } catch (err) {
            console.error("Error fetching Pokémon details: ", err);
        }
    };

    useEffect(() => {
        fetchPokemonDetails();
    }, []);

    return (
        <div className="boxList">
            {pokelist.length > 0 ? (
                pokelist.map((pokemon) => (
                    <div key={pokemon.id} className="pkmn">
                            <h1>{pokemon.name}</h1>
                            <h4 className="idnumero"> {pokemon.id}</h4>
                            <img
                                src={pokemon.gif}
                                alt={`GIF de ${pokemon.name}`}
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/20";
                                }}
                            />
                            <button  onClick={() => (<></>)}>
                                <h6>Mais</h6>
                            </button>
                        <p className="tipos">
                            {pokemon.types.map((type) => (
                                <span
                                    key={type}
                                    style={{
                                        backgroundColor: Cor[type] || "#000",
                                        color: "#FFF",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        marginRight: "5px",
                                        display: "inline-block",
                                    }}
                                >
                                    {type}
                                </span>
                            ))}
                        </p>
                    </div>
                ))
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default List;
