import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './components/App';
import game from './game'

ReactDOM.render(

	<BrowserRouter>
		<Switch>
			<Route exact path = '/' component = {App}/>
			<Route exact path = '/game' component = {game}/>
		</Switch>
	</BrowserRouter>

	, document.getElementById('root'));



