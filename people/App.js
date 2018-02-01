import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

import axios from 'axios';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			peoples: []
		};
	}

	componentDidMount() {
		axios
			.get('https://randomuser.me/api/?nat=br&results=5')
			.then(response => {
				const { results } = response.data;
				this.setState({
					peoples: results
				});
			})
	}

	renderList() {
		// const textElements = names.map(name => {
		// 	return <Text key={name}>{name}</Text>;
		// });

		/* Promises */


		// return textElements;
	}

	render() {
		return (
			<View>
				<Header title="Pessoas!" />
			</View>
		);
	}
}
