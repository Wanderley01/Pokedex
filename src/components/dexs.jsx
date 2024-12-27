import axios from "axios";
import "../css/list.css";
import { useEffect, useState } from "react";

// aqui eu tive muita dificuldade e tive que pesquisar e usar o chat para resolver

function List() {
    const [pokelist, setPokelist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);

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

    const fetchAllPokemon = async () => {
        try {
            let nextUrl = "https://pokeapi.co/api/v2/pokemon";
            const allPokemon = [];

            while (nextUrl) {
                const response = await axios.get(nextUrl);
                allPokemon.push(...response.data.results);
                nextUrl = response.data.next; 
            }

            const detailedPokemon = await Promise.all(
                allPokemon.map(async (pokemon) => {
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
        fetchAllPokemon();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = pokelist.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(pokelist.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="boxList">
            {currentItems.length > 0 ? (
                currentItems.map((pokemon) => (
                    <div key={pokemon.id} className="pkmn">
                        <h1>{pokemon.name}</h1>
                        <h4 className="idnumero">#{pokemon.id}</h4>
                        <img
                            src={pokemon.gif}
                            alt={`GIF de ${pokemon.name}`}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/20";
                            }}
                        />
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

            <div className="page">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    ◀️
                </button>
                <h1>
                    Página {currentPage} de {Math.ceil(pokelist.length / itemsPerPage)}
                </h1>
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(pokelist.length / itemsPerPage)}
                >
                    ▶️
                </button>
            </div>
        </div>
    );
}

export default List;
