import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			peoples: []
		};
	}

	componentDidMount() {
		axios
			.get('https://randomuser.me/api/?nat=br&results=15')
			.then(response => {
				const { results } = response.data;
				this.setState({
					peoples: results
				});
			})
	}

	render() {
		// this.props.navition.navigate(/* Chave da página */, /* state */)
		// this.props.navigation.navigate('PeopleDetail');
		return (
			<View>
				<PeopleList
					peoples={this.state.peoples}
					onPressItem={pageParams => {
						this.props.navigation.navigate('PeopleDetail', pageParams);
					}} />
			</View>
		);
	}
}
