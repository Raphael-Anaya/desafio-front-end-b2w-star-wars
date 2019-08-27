import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Title extends React.Component{
	render(){
		return(
			<div className = "title">
				<img src = "/img/title-star-wars.png" alt = "Imagem de titulo Star Wars" />

				<h2>Desafio Front-End B2W</h2>

				<Link className="botao-decoration" to = "/game">
					<button className="botao">
							PLAY
					</button>
				</Link>

			</div>
		);
	}
}