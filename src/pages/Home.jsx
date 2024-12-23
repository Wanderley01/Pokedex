import React from "react";
import Dex from "./Dex.jsx";
import "../css/home.css";
import Red from "../img/Red.png";
import { useNavigate } from 'react-router-dom';
import char from "../img/char.png";

function Home() {

    const navigate = useNavigate();


    return(
            <div className="container">
                    <div className="box">
                <div className="title">
                    <h1> POKEDEX </h1>
                </div>
                
                <div className="Char">
                <img src={char} alt="Red"/>
                </div>

                <div className="foto">
                    <img src={Red} alt="Red" width={100}/>
                </div>

                <div className="options">
                    <button onClick={() => (navigate('/Dex'))}>Pokemons</button>
                    <button onClick={() => (navigate('/#'))}>nada</button>
                    <button onClick={() => (navigate('/#'))}>nada</button>
                    <button onClick={() => (navigate('/#'))}>nada</button>
                </div>
            </div>
        </div>
        
    ) 
};

export default Home;