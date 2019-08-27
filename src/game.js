import React, {Component} from 'react';
import './index.css';

class game extends Component{
    render(){
        return(
        	<main>

        		<section className = "secao-planet">
					<h1 id="planet" className="planets">PLANET NAME</h1>
					<hr />
					<h2 id="population">POPULATION:</h2>
					<h2 id="climate">CLIMATE:</h2>
					<h2 id="terrain">TERRAIN:</h2>
					  
					<p>FEATURED IN FILMS</p>
				</section>

				<button className="botao game-botao" type = "button" onclick = '[document.getElementById("planet").innerHTML = {"Teste executado com sucesso1"}, document.getElementById("population").innerHTML = "Teste executado com sucesso2", document.getElementById("climate").innerHTML = "Teste executado com sucesso3", document.getElementById("terrain").innerHTML = "Teste executado com sucesso4", document.getElementById("featured").innerHTML = "Teste executado com sucesso5"]'>NEXT</button>
				                                   
            </main>

        );
    }
}

export default game;
