import React, { Component } from 'react';
import Card from '../Card/card.js';
import Choices from '../../choices.json';

export default class Game extends Component {
	state = {
		count: 0,
		clicked: [],
		choices: Choices
	};
	render() {
		return(
			<div className="game">

				{this.state.choices.map(choice => (
					<Card choice={choice} />
				))}
			</div>
		);
	}
}

